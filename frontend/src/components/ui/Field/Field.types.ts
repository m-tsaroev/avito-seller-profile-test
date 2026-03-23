import type { IconType } from 'react-icons/lib'

export type FieldProps = {
	id: string
	type: string
	label: string
	hideLabel?: boolean
	placeholder: string
	value: string
	setValue: (value: string | ((prevState: string) => string)) => void
	icon?: IconType
	variant?: 'default' | 'thinline'
}
