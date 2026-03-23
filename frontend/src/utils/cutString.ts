export const cutString = (str: string): string => {
	if (str.length > 15) {
		str = str.slice(0, 15)
	}

	return str + '...'
}
