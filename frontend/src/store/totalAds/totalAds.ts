import { create } from 'zustand'

import type { StoreParams } from './totalAds.types'

export const useTotalAdsStore = create<StoreParams>(set => ({
	totalAds: 0,
	isLoading: false,
	setTotalAds: (count: number) => set(() => ({ totalAds: count })),
	setIsLoading: (isLoad: boolean) => set(() => ({ isLoading: isLoad }))
}))
