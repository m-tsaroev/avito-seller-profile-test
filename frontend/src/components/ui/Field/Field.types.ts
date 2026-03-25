import type { ChangeEvent } from 'react'
import type { IconType } from 'react-icons/lib'

type FieldActions = {
	value?: string | number
	setValue?: (value: string | ((prevState: string) => string)) => void
}

export type FieldProps = FieldActions & {
	id: string
	type: string
	label?: string
	required?: boolean
	placeholder: string
	icon?: IconType
	variant?: 'default' | 'filled'
	w?: string
	error?: string
	labelSize?: 'sm' | 'l'
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
