import { Fieldset } from '@mantine/core'
import { Controller } from 'react-hook-form'

import { DropDown } from '@/components/ui/DropDown'
import { Field } from '@/components/ui/Field'

import type { RealEstateFieldsProps } from './RealEstateFields.types'

const RealEstateFields = (props: RealEstateFieldsProps) => {
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
						clearable={false}
						required
						label='Тип'
						data={[
							{
								value: 'flat',
								label: 'Квартира'
							},
							{
								value: 'house',
								label: 'Дом'
							},
							{
								value: 'room',
								label: 'Комната'
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
				name='params.address'
				render={({ field }) => (
					<Field
						id='address'
						type='text'
						label='Адрес'
						value={field.value ?? ''}
						placeholder='г. Москва, ул. Такого-то такого-то'
						onChange={value => field.onChange(value)}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.area'
				render={({ field }) => (
					<Field
						id='area'
						type='number'
						label='Местность'
						value={field.value ? String(field.value) : ''}
						placeholder='41.2'
						setValue={value => field.onChange(value)}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='params.floor'
				render={({ field }) => (
					<Field
						id='floor'
						type='number'
						label='Этаж'
						value={field.value ? String(field.value) : ''}
						placeholder='9'
						setValue={value => field.onChange(value)}
					/>
				)}
			/>
		</Fieldset>
	)
}

export { RealEstateFields }
