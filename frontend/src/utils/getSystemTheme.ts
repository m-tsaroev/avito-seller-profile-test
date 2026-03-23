export const getSystemTheme = (): 'dark' | 'light' => {
	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

	return isDark ? 'dark' : 'light'
}
