export const formatDate = (isoString: string): string => {
	const date = new Date(isoString)
	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	}).format(date)
}
