import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { aiSrvice } from '@/services/ai.services'

import type { AdFormValues } from '@/hooks/useUpdateForm'

export const useAi = (
	form: UseFormReturn<AdFormValues>,
	isForDescription = true
) => {
	const { data, mutate, isPending } = useMutation({
		mutationKey: [
			'ai',
			isForDescription ? 'description-prompt' : 'price-prompt'
		],
		mutationFn: (adData: AdFormValues) =>
			aiSrvice.prompt(adData, isForDescription)
	})

	const {
		mutate: getAveragePrice,
		data: averagePrice,
		isSuccess
	} = useMutation({
		mutationKey: ['average-price'],
		mutationFn: (prompt: string) => aiSrvice.getMarketPrice(prompt)
	})

	useEffect(() => {
		if (!isForDescription && !!data) {
			getAveragePrice(data.response.trim())
		}
	}, [data, isForDescription, getAveragePrice])

	const applyChanges = () => {
		if (isForDescription) {
			console.log('its from useAi')
			form.setValue('description', data?.response.replaceAll('\n', '').trim())
		} else {
			console.log('its from useAi, but not for you')
			form.setValue('price', Number(averagePrice?.response.trim()))
		}
	}

	return {
		mutate,
		data,
		isPending,
		applyChanges,
		averagePrice,
		isPriceApply: isSuccess
	}
}
