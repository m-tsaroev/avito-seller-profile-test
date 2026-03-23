import type { AdsRequestsParams } from '@/types/AdsRequestsParams.types'

export type Categories = 'auto' | 'real_estate' | 'electronics'

type StoreActions = {
	categories: Categories[]
	activePage: number
	setQ: (q: string) => void
	setLimit: (limit: number) => void
	setSkip: (skip: number) => void
	setNeedsRevision: (needsRevision: boolean) => void
	toggleCategory: (category: Categories) => void
	resetCategories: () => void
	setSortColumn: (sortColumn: 'title' | 'createdAt' | null) => void
	setSortDirection: (sortDirection: 'asc' | 'desc' | null) => void
	setActivePage: (pageNumber: number) => void
}

export type StoreParams = StoreActions & Omit<AdsRequestsParams, 'categories'>
