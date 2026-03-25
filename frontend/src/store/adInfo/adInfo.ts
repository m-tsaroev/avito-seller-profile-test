import { create } from 'zustand'

import type { AdResponse } from '@/types/AdResponse.types'

import type { StoreParams } from './adInfo.types'

export const useAdInfoStore = create<StoreParams>(set => ({
	ad: {},
	isLoading: false,
	setAd: (ad: AdResponse) => set(() => ({ ad })),
	setIsLoading: (isLoading: boolean) => set(() => ({ isLoading }))
}))
