import { ITEMS } from '@/config/endpoints.config'

import type { AdResponse } from '@/types/AdResponse.types'
import type { ItemUpdateIn } from '@/types/AdUpdateRequest.types'
import type { AdsRequestsParams } from '@/types/AdsRequestsParams.types'
import type { AdsResponse } from '@/types/AdsResponse.types'

import { adsAxios } from '@/api/ads.interceptors'

class AdsService {
	async getAds(params: AdsRequestsParams) {
		const response = await adsAxios<AdsResponse>({
			url: ITEMS,
			params
		})

		return response.data
	}

	async getAd(id: number) {
		const response = await adsAxios<AdResponse>({
			url: `${ITEMS}/${id}`
		})

		return response.data
	}

	async updateAd(data: ItemUpdateIn) {
		const response = await adsAxios<{ success: boolean }>({
			method: 'PUT',
			url: `${ITEMS}/${data.id}`,
			data
		})

		return response.data
	}
}

export const adsService = new AdsService()
