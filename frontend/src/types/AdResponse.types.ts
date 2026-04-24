import type {
	AutoItemParams,
	ElectronicsItemParams,
	RealEstateItemParams
} from '@/types/AdUpdateRequest.types'

type AdResponseBase = {
	id: number
	title: string
	description: string
	price: number
	createdAt: string
	updatedAt: string
}

export type AdResponse =
	| (AdResponseBase & { category: 'auto'; params: AutoItemParams })
	| (AdResponseBase & { category: 'real_estate'; params: RealEstateItemParams })
	| (AdResponseBase & { category: 'electronics'; params: ElectronicsItemParams })
