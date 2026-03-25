import { Fieldset } from '@mantine/core'
import { Controller } from 'react-hook-form'

import { DropDown } from '@/components/ui/DropDown'
import { Field } from '@/components/ui/Field'

import type { ElectronicsFieldsProps } from './ElectronicsFields.types'

const ElectronicsFields = (props: ElectronicsFieldsProps) => {
	const { form } = props

	return (
		<Fieldset
			legend={
				<span
					style={{
						fontSize: '16px',
						fontWeight: 600,
						lineHeight: 1.4
					}}
				>
					Характеристики
				</span>
			}
			variant='unstyled'
			w='500px'
			style={{
				display: 'grid',
				rowGap: '12px'
			}}
		>
			<Controller
				control={form.control}
				name='params.type'
				render={({ field, fieldState }) => (
					<DropDown
						required
						clearable={false}
						label='Тип'
						data={[
							{
								value: 'phone',
								label: 'Телефон'
							},
							{
								value: 'laptop',
								label: 'Ноутбук'
							},
							{
								value: 'misc',
								label: 'Разное'
							}
						]}
						value={field.value}
						onChange={value => field.onChange(value)}
						error={fieldState.error?.message}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.brand'
				render={({ field }) => (
					<Field
						id='brand'
						type='text'
						label='Бренд'
						value={field.value ?? ''}
						placeholder='Apple'
						setValue={value => field.onChange(value)}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.model'
				render={({ field }) => (
					<Field
						id='model'
						type='text'
						label='Модель'
						value={field.value}
						placeholder='Air'
						setValue={value => field.onChange(value)}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.condition'
				render={({ field, fieldState }) => (
					<DropDown
						required
						clearable={false}
						label='Состояное'
						data={[
							{
								value: 'new',
								label: 'Новое'
							},
							{
								value: 'used',
								label: 'Б/У'
							}
						]}
						value={field.value}
						onChange={value => field.onChange(value)}
						error={fieldState.error?.message}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.color'
				render={({ field }) => (
					<Field
						id='color'
						type='text'
						label='Цвет'
						value={field.value ? String(field.value) : ''}
						placeholder='Серый'
						setValue={value => field.onChange(value)}
					/>
				)}
			/>
		</Fieldset>
	)
}

export { ElectronicsFields }
