export type AdsRequestsParams = {
	q?: string | null
	limit: number
	skip?: number | null
	needsRevision: boolean
	categories?: string | null
	sortColumn?: 'title' | 'createdAt' | null
	sortDirection?: 'asc' | 'desc' | null
}
