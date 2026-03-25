export const AUTO_CHARACTERS = {
	brand: 'Бренд',
	model: 'Модель',
	yearOfManufacture: 'Год производства',
	transmission: 'Трансмиссия',
	mileage: 'Пробег',
	enginePower: 'Мощьность двигателя'
}

export const REAL_ESTATE_CHARACTERS = {
	type: 'Тип',
	address: 'Адрес',
	area: 'Область',
	floor: 'Этаж'
}

export const ELECTRONICS_CHARACTERS = {
	type: 'Тип',
	brand: 'Бренд',
	model: 'Модель',
	condition: 'Состояние',
	color: 'Цвет'
}

export const CHARACTERS_KEYS = {
	...AUTO_CHARACTERS,
	...REAL_ESTATE_CHARACTERS,
	...ELECTRONICS_CHARACTERS
} as const

export const CHARACTERS_VALUES = {
	type: {
		phone: 'Телефон',
		laptop: 'Ноутбук',
		misc: 'Разное',
		flat: 'Квартира',
		house: 'Дом',
		room: 'Комната'
	},
	condition: {
		new: 'Новый',
		used: 'Б/У'
	},
	transmission: {
		automatic: 'Автоматическа',
		manual: 'Механическая'
	}
} as const

export type CharactersValuesType = keyof typeof CHARACTERS_VALUES
