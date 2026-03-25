import { zodResolver } from '@hookform/resolvers/zod'
import { notifications } from '@mantine/notifications'
import {
	type QueryObserverResult,
	type RefetchOptions,
	useMutation
} from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { z } from 'zod'

import { adsService } from '@/services/ads.services'

import type { AdResponse } from '@/types/AdResponse.types'
import type {
	AutoItemParams,
	ElectronicsItemParams,
	ItemUpdateIn,
	RealEstateItemParams
} from '@/types/AdUpdateRequest.types'

const numberField = z.coerce.number<number>().optional()

const adFormBaseSchema = z.object({
	category: z.enum(['auto', 'real_estate', 'electronics']),
	title: z.string().min(1, 'Название обязательно'),
	price: z.coerce.number<number>().min(0, 'Цена должна быть положительной'),
	description: z.string().optional()
})

const autoParamsSchema = z.object({
	brand: z.string().optional(),
	model: z.string().optional(),
	yearOfManufacture: z.number().optional(),
	transmission: z.enum(['automatic', 'manual'], 'Выберите трансмиссию'),
	mileage: numberField,
	enginePower: numberField
})

const realEstateParamsSchema = z.object({
	type: z.enum(['flat', 'house', 'room'], 'Выберите тип недвижимости'),
	address: z.string().optional(),
	area: numberField,
	floor: numberField
})

const electronicsParamsSchema = z.object({
	type: z.enum(['phone', 'laptop', 'misc'], 'Выберите тип устройства'),
	brand: z.string().optional(),
	model: z.string().optional(),
	condition: z.enum(['new', 'used'], 'В каком состоянии ваше устройство'),
	color: z.string().optional()
})

const adFormSchema = adFormBaseSchema.and(
	z.discriminatedUnion('category', [
		z.object({ category: z.literal('auto'), params: autoParamsSchema }),
		z.object({
			category: z.literal('real_estate'),
			params: realEstateParamsSchema
		}),
		z.object({
			category: z.literal('electronics'),
			params: electronicsParamsSchema
		})
	])
)

export type AdFormValues = z.infer<typeof adFormSchema>

const getDefaultValues = (data: AdResponse): AdFormValues => {
	const { category, title, price, description, params } = data

	switch (category) {
		case 'auto':
			return {
				category,
				title,
				price,
				description,
				params: params as AutoItemParams
			}

		case 'real_estate':
			return {
				category,
				title,
				price,
				description,
				params: params as RealEstateItemParams
			}

		case 'electronics':
			return {
				category,
				title,
				price,
				description,
				params: params as ElectronicsItemParams
			}
	}
}

export const getDefaultParams = (category: AdFormValues['category']) => {
	switch (category) {
		case 'auto':
			return {
				brand: '',
				model: '',
				yearOfManufacture: undefined,
				transmission: 'automatic',
				mileage: undefined,
				enginePower: undefined
			}

		case 'real_estate':
			return {
				type: 'flat',
				address: '',
				area: undefined,
				floor: undefined
			}

		case 'electronics':
			return {
				type: 'phone',
				brand: '',
				model: '',
				condition: 'new',
				color: ''
			}
	}
}

export const useUpdateForm = (
	data: AdResponse,
	refetchFn: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<AdResponse, Error>>
) => {
	const form = useForm<AdFormValues>({
		resolver: zodResolver(adFormSchema),
		defaultValues: getDefaultValues(data)
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['updateAd'],
		mutationFn: (data: ItemUpdateIn) => adsService.updateAd(data),
		onSuccess: () => {
			refetchFn()
			notifications.show({
				title: 'Успешно!',
				message: 'Объявление сохранено',
				color: 'green',
				icon: <FaRegCircleCheck />,
				autoClose: 3000,
				w: '400px'
			})
		}
	})

	const onSubmit = (formData: AdFormValues) => {
		const payload: ItemUpdateIn = {
			id: data.id, // 👈 берём из пропсов
			...formData
		}

		mutate(payload)
	}

	return { form, onSubmit, isPending }
}
