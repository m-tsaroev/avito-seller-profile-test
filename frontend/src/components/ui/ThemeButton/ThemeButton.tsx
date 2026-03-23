import { Button, useMantineColorScheme } from '@mantine/core'
import { FiSun } from 'react-icons/fi'
import { LuMoon } from 'react-icons/lu'

const ThemeButton = () => {
	const { colorScheme, setColorScheme } = useMantineColorScheme()

	return (
		<Button
			variant='default'
			color='dark'
			radius='md'
			style={{
				padding: 8
			}}
			onClick={() => {
				setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
			}}
		>
			{colorScheme === 'light' ? <LuMoon size={18} /> : <FiSun size={18} />}
		</Button>
	)
}

export { ThemeButton }
