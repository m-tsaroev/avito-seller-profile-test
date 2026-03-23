import { Select } from '@mantine/core'
import { IoIosArrowDown } from 'react-icons/io'

import type { DropDownProps } from './DropDown.types'

const DropDown = (props: DropDownProps) => {
	const {
		label,
		placeholder,
		data,
		value,
		onChange,
		onClear,
		variant = 'default'
	} = props

	return (
		<Select
			clearable
			data={data}
			value={value}
			onChange={onChange}
			onClear={onClear}
			placeholder={placeholder}
			label={label}
			rightSection={<IoIosArrowDown />}
			checkIconPosition='right'
			size='xs'
			radius='md'
			miw='240px'
			styles={{
				input: {
					border:
						variant === 'border-bold'
							? '4px solid var(--mantine-color-body)'
							: ''
				}
			}}
		/>
	)
}

export { DropDown }
