export const PATHS = {
	ROOT: '/',
	ADS: 'ads',
	AD: 'ads/:id',
	AD_EDIT: (path: string = ':id') => `ads/${path}/edit`
} as const
