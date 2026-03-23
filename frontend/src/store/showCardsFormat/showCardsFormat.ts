import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { StoreParams } from './showCardsFormat.types'

export const useShowCardsFormatStore = create<StoreParams>()(
	persist(
		set => ({
			isListFormat: true,
			setIsListFormat: (is: boolean) => set(() => ({ isListFormat: is }))
		}),

		{
			name: 'show-cards-format',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
)
