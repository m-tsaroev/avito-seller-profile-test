import { Button, Textarea } from '@mantine/core'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { DropDown } from '@/components/ui/DropDown'
import { Field } from '@/components/ui/Field'
import { AiButton } from '@/components/ui/Form/components/AiButton'
import { ElectronicsFields } from '@/components/ui/Form/components/ElectronicsFields'

import { useAi } from '@/hooks/useAi'
import { useUpdateForm } from '@/hooks/useUpdateForm'

import styles from './Form.module.scss'
import type { FormProps } from './Form.types'
import { AutoFields } from './components/AutoFields'
import { RealEstateFields } from './components/RealEstateFields'

const Form = (props: FormProps) => {
	const { data, refetchFn } = props

	const navigate = useNavigate()

	const { form, onSubmit, isPending } = useUpdateForm(data, refetchFn)

	const [currentCategory, setCurrentCategory] = useState('')

	const category = form.watch('category')

	useEffect(() => {
		setCurrentCategory(category)
	}, [category])

	const {
		data: aiData,
		mutate,
		isPending: isAiLoading,
		applyChanges,
		isPriceApply
	} = useAi(form, false)

	const {
		data: aiDescriptionData,
		mutate: descriptionAiMutate,
		isPending: isAiDescriptionLoading,
		applyChanges: descriptionApplyChanges
	} = useAi(form)

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<div className={styles.section}>
				<Controller
					control={form.control}
					name='category'
					render={({ field }) => (
						<DropDown
							clearable={false}
							label='Категория'
							data={[
								{
									value: 'auto',
									label: 'Авто'
								},
								{
									value: 'real_estate',
									label: 'Недвижимость'
								},
								{
									value: 'electronics',
									label: 'Электроника'
								}
							]}
							value={field.value}
							onChange={value => {
								setCurrentCategory(value ?? '')
								field.onChange(value)
							}}
							w='256px'
							labelSize='l'
						/>
					)}
				/>
			</div>
			<div className={styles.section}>
				<Controller
					control={form.control}
					name='title'
					render={({ field, fieldState }) => (
						<Field
							id='title'
							type='text'
							label='Название'
							value={field.value}
							placeholder='Macbook pro 16'
							setValue={value => field.onChange(value)}
							error={fieldState.error?.message}
							required
							w='500px'
							labelSize='l'
						/>
					)}
				/>
			</div>
			<div className={clsx(styles.section, styles.aiPrice)}>
				<Controller
					control={form.control}
					name='price'
					render={({ field }) => (
						<Field
							id='price'
							type='number'
							label='Цена'
							value={field.value}
							placeholder='500'
							onChange={field.onChange}
							required
							w='500px'
							labelSize='l'
						/>
					)}
				/>
				<AiButton
					label='Узнать рыночную цену'
					applyFunction={applyChanges}
					aiFunction={() => mutate(form.getValues())}
					text={aiData?.response ?? ''}
					acceptApply={isPriceApply}
					isLoading={isAiLoading}
				/>
			</div>
			<div className={styles.section} key={category}>
				{currentCategory === 'auto' ? (
					<AutoFields form={form} />
				) : currentCategory === 'real_estate' ? (
					<RealEstateFields form={form} />
				) : (
					<ElectronicsFields form={form} />
				)}
			</div>
			<div className={clsx(styles.section, styles.aiDescription)}>
				<Controller
					control={form.control}
					name='description'
					render={({ field }) => (
						<Textarea
							id='description'
							label='Описание'
							value={field.value ? String(field.value) : ''}
							placeholder='Продаю свой MacBook Pro 16" (2021) на чипе M1 Pro. Состояние отличное...'
							onChange={event => field.onChange(event)}
							radius='8px'
							w='1000px'
							labelProps={{
								style: {
									fontSize: '16px',
									fontWeight: 600,
									lineHeight: 1.4
								}
							}}
							resize='vertical'
						/>
					)}
				/>
				<AiButton
					label='Улучшить описание'
					text={aiDescriptionData?.response ?? ''}
					isLoading={isAiDescriptionLoading}
					aiFunction={() => descriptionAiMutate(form.getValues())}
					applyFunction={descriptionApplyChanges}
					acceptApply
				/>
			</div>
			<div className={styles.buttons}>
				<Button fw={400} radius={8} type='submit' disabled={isPending}>
					Сохранить
				</Button>

				<Button
					fw={400}
					radius={8}
					c='dark'
					bg='#D9D9D9'
					onClick={() => {
						navigate(-1)
					}}
				>
					Отмена
				</Button>
			</div>
		</form>
	)
}

export { Form }
