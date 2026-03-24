import type { AdResponse } from '@/types/AdResponse.types'

export type StoreParams = {
	ad: Partial<AdResponse>
	setAd: (ad: AdResponse) => void
}
