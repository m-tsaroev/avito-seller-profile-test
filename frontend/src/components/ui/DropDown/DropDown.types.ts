import type { ComboboxItem } from '@mantine/core'

type DropDownOption = {
	value: string
	label: string
}

export type DropDownProps = {
	label?: string
	placeholder: string
	data: DropDownOption[]
	value: string | null
	onChange: (value: string | null, option: ComboboxItem) => void
  onClear?: () => void
	variant?: 'border-bold' | 'default'
}
