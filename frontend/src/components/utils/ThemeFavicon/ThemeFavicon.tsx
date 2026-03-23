import { useMantineColorScheme } from '@mantine/core'
import { useEffect } from 'react'

import { getSystemTheme } from '@/utils/getSystemTheme'

const ThemeFavicon = () => {
	const { colorScheme } = useMantineColorScheme()

	useEffect(() => {
		const favicon = document.querySelector('link[rel="icon"]')
		const systemTheme = getSystemTheme()

		if (favicon) {
			favicon.href =
				colorScheme === 'dark' ||
				(colorScheme === 'auto' && systemTheme === 'dark')
					? '/favicons/favicon-dark.ico'
					: '/favicons/favicon.ico'
		}
	}, [colorScheme])

	return null
}

export { ThemeFavicon }
