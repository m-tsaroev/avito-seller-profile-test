import type { AdResponse } from '@/types/AdResponse.types'

export type StoreParams = {
	ad: Partial<AdResponse>
	isLoading: boolean
	setAd: (ad: AdResponse) => void
	setIsLoading: (bool: boolean) => void
}
