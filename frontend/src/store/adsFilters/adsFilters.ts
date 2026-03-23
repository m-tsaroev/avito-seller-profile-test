import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { Categories, StoreParams } from './adsFilters.types'

export const useAdsFiltersStore = create<StoreParams>()(
	persist(
		set => ({
			q: null,
			limit: 10,
			skip: 0,
			needsRevision: false,
			categories: [],
			sortColumn: null,
			sortDirection: null,
			activePage: 1,
			setQ: (q: string) => set(() => ({ q })),
			setLimit: (limit: number) => set(() => ({ limit })),
			setSkip: (skip: number) => set(() => ({ skip })),
			setNeedsRevision: (needsRevision: boolean) =>
				set(() => ({ needsRevision })),
			toggleCategory: (category: Categories) =>
				set(state => ({
					categories: state.categories.includes(category)
						? state.categories.filter(c => c !== category)
						: [...state.categories, category]
				})),
			resetCategories: () => set({ categories: [] }),
			setSortColumn: (sortColumn: 'title' | 'createdAt' | null) =>
				set(() => ({ sortColumn })),
			setSortDirection: (sortDirection: 'asc' | 'desc' | null) =>
				set(() => ({ sortDirection })),
			setActivePage: (pageNumber: number) =>
				set(state => {
					return {
						skip: state.limit * (pageNumber - 1),
						activePage: pageNumber
					}
				})
		}),

		{
			name: 'ads-params',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
)
