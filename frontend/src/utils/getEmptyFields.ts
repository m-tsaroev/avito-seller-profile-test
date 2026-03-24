import {
	AUTO_CHARACTERS,
	ELECTRONICS_CHARACTERS,
	REAL_ESTATE_CHARACTERS
} from '@/constants/charactersKeys'

import type { AdResponse } from '@/types/AdResponse.types'
import type {
	AutoItemParams,
	ElectronicsItemParams,
	RealEstateItemParams
} from '@/types/AdUpdateRequest.types'

export const getEmptyFields = (
	params: AdResponse['params'],
	category: AdResponse['category']
): string[] => {
	const result: string[] = []

	if (category === 'auto') {
		const autoParams = params as AutoItemParams

		for (const key of Object.keys(
			AUTO_CHARACTERS
		) as (keyof AutoItemParams)[]) {
			if (!autoParams[key]) {
				result.push(AUTO_CHARACTERS[key])
			}
		}
	}

	if (category === 'electronics') {
		const electronicsParams = params as ElectronicsItemParams

		for (const key of Object.keys(
			ELECTRONICS_CHARACTERS
		) as (keyof ElectronicsItemParams)[]) {
			if (!electronicsParams[key]) {
				result.push(ELECTRONICS_CHARACTERS[key])
			}
		}
	}

	if (category === 'real_estate') {
		const realEstateParams = params as RealEstateItemParams

		for (const key of Object.keys(
			REAL_ESTATE_CHARACTERS
		) as (keyof RealEstateItemParams)[]) {
			if (!realEstateParams[key]) {
				result.push(REAL_ESTATE_CHARACTERS[key])
			}
		}
	}

	return result
}
