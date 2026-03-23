import clsx from 'clsx'
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
		hideLabel = false,
		icon: Icon,
		variant = 'default'
	} = props

	const onCrossClick = () => {
		setValue('')
	}

	const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<div
			className={clsx(styles.field, {
				[styles[variant]]: variant
			})}
		>
			<label
				className={clsx(styles.label, { 'visually-hidden': hideLabel })}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onFieldChange}
				className={styles.input}
			/>
			{value ? (
				<button type='button' className={styles.cross} onClick={onCrossClick}>
					<FaPlus />
				</button>
			) : (
				Icon && <Icon />
			)}
		</div>
	)
}

export { Field }
