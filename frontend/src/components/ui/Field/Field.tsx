import { TextInput } from '@mantine/core'
import { type ChangeEvent } from 'react'
import { FaPlus } from 'react-icons/fa6'

import styles from './Field.module.scss'
import type { FieldProps } from './Field.types'

const Field = (props: FieldProps) => {
	const {
		id,
		type,
		value,
		placeholder,
		setValue,
		label,
		icon: Icon,
		variant = 'default',
		w,
		error,
		required = false,
		labelSize = 'sm',
		onChange
	} = props

	const onCrossClick = () => {
		setValue?.('')
	}

	const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue?.(event.target.value)
	}
	const labelNode = required ? (
		<span>
			<span className={styles.asterisk}>*</span> {label}
		</span>
	) : (
		label
	)

	return (
		<TextInput
			id={id}
			name={id}
			type={type}
			label={labelNode}
			variant={variant}
			radius='8px'
			placeholder={placeholder}
			size='xs'
			value={value}
			onChange={onChange ?? onFieldChange}
			rightSection={
				value ? (
					<button type='button' className={styles.cross} onClick={onCrossClick}>
						<FaPlus />
					</button>
				) : (
					Icon && <Icon />
				)
			}
			w={w}
			error={error}
			labelProps={
				labelSize === 'l'
					? {
							style: {
								fontSize: '16px',
								fontWeight: 600,
								lineHeight: 1.4
							}
						}
					: {
							style: {
								fontSize: '14px',
								fontWeight: 400,
								lineHeight: 1.5
							}
						}
			}
		/>
	)
}

export { Field }
