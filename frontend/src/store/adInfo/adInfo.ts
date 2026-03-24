import { create } from 'zustand'

import type { AdResponse } from '@/types/AdResponse.types'

import type { StoreParams } from './adInfo.types'

export const useAdInfoStore = create<StoreParams>(set => ({
	ad: {},
	setAd: (ad: AdResponse) => set(() => ({ ad }))
}))
