import { ITEMS } from '@/config/endpoints'

import type { AdResponse } from '@/types/AdResponse.types'
import type { AdsRequestsParams } from '@/types/AdsRequestsParams.types'
import type { AdsResponse } from '@/types/AdsResponse.types'

import { adsAxios } from '@/api/ads.interceptors'

class AdsService {
	async getAds(params: AdsRequestsParams) {
		const respones = await adsAxios<AdsResponse>({
			url: ITEMS,
			params
		})

		return respones.data
	}

	async getAd(id: number) {
		const respones = await adsAxios<AdResponse>({
			url: `${ITEMS}/${id}`
		})

		return respones.data
	}
}

export const adsService = new AdsService()
