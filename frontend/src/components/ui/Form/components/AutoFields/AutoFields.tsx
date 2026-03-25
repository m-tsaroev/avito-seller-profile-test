import { Fieldset } from '@mantine/core'
import { Controller } from 'react-hook-form'

import { DropDown } from '@/components/ui/DropDown'
import { Field } from '@/components/ui/Field'

import type { AutoFieldsProps } from './AutoFields.types'

const AutoFields = (props: AutoFieldsProps) => {
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
				name='params.brand'
				render={({ field }) => (
					<Field
						id='brand'
						type='text'
						label='Бренд'
						value={field.value ? String(field.value) : ''}
						placeholder='Audi'
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
						placeholder='RS7'
						onChange={field.onChange}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.yearOfManufacture'
				render={({ field }) => (
					<Field
						id='year-of-manufacture'
						type='number'
						label='Год производства'
						value={field.value}
						placeholder='2021'
						onChange={field.onChange}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.transmission'
				render={({ field, fieldState }) => (
					<DropDown
						required
						clearable={false}
						label='Трансмиссия'
						data={[
							{
								value: 'automatic',
								label: 'Автоматическа'
							},
							{
								value: 'manual',
								label: 'Механическая'
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
				name='params.mileage'
				render={({ field }) => (
					<Field
						id='mileage'
						type='number'
						label='Пробег в км.'
						value={field.value}
						placeholder='100000'
						onChange={field.onChange}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.enginePower'
				render={({ field }) => (
					<Field
						id='engine-power'
						type='number'
						label='Мощьность двигателя'
						value={field.value}
						placeholder='100000'
						onChange={field.onChange}
					/>
				)}
			/>
		</Fieldset>
	)
}

export { AutoFields }
