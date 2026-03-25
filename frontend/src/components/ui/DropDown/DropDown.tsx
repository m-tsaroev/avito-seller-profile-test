import { Select } from '@mantine/core'
import { IoIosArrowDown } from 'react-icons/io'

import type { DropDownProps } from './DropDown.types'

const DropDown = (props: DropDownProps) => {
	const {
		clearable = true,
		label,
		placeholder,
		data,
		value,
		onChange,
		onClear,
		variant = 'default',
		required = false,
		w,
		labelSize = 'sm',
    error
	} = props

	return (
		<Select
			required={required}
			clearable={clearable}
			data={data}
			value={value}
			onChange={onChange}
			onClear={onClear}
			placeholder={placeholder}
			label={label}
			rightSection={<IoIosArrowDown />}
			checkIconPosition='right'
      error={error}
			size='xs'
			radius='md'
			miw='240px'
			w={w}
			styles={{
				input: {
					border:
						variant === 'border-bold'
							? '4px solid var(--mantine-color-body)'
							: ''
				}
			}}
			labelProps={
				labelSize === 'l'
					? {
							style: {
								fontSize: '16px',
								fontWeight: 600,
								lineHeight: 1.4,
								marginBottom: 8
							}
						}
					: {
							style: {
								fontSize: '14px',
								fontWeight: 400,
								lineHeight: 1.5,
								marginBottom: 8
							}
						}
			}
		/>
	)
}

export { DropDown }
