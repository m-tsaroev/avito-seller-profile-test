import type { AdResponse } from '@/types/AdResponse.types'
import type {
	AutoItemParams,
	ElectronicsItemParams,
	RealEstateItemParams
} from '@/types/AdUpdateRequest.types'

export type CharactersListProps = {
	params: AdResponse['params']
}

export type ParamsKeysType =
	| keyof AutoItemParams
	| keyof RealEstateItemParams
	| keyof ElectronicsItemParams

export type TypeParamType =
	| RealEstateItemParams['type']
	| ElectronicsItemParams['type']

export type ConditionParamType = ElectronicsItemParams['condition']

export type TransmissionParamType = AutoItemParams['transmission']
