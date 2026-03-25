import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { adsService } from '@/services/ads.services'

import { useAdsFiltersStore } from '@/store/adsFilters'
import { useTotalAdsStore } from '@/store/totalAds'

import type { AdsResponse } from '@/types/AdsResponse.types'

export const useAds = () => {
	const q = useAdsFiltersStore(state => state.q)
	const limit = useAdsFiltersStore(state => state.limit)
	const skip = useAdsFiltersStore(state => state.skip)
	const needsRevision = useAdsFiltersStore(state => state.needsRevision)
	const categories = useAdsFiltersStore(state => state.categories)
	const sortColumn = useAdsFiltersStore(state => state.sortColumn)
	const sortDirection = useAdsFiltersStore(state => state.sortDirection)

	const setTotalAds = useTotalAdsStore(state => state.setTotalAds)
	const setIsLoading = useTotalAdsStore(state => state.setIsLoading)

	const { data, isPending, isFetching, isSuccess, error } =
		useQuery<AdsResponse>({
			queryKey: [
				'ads',
				q,
				limit,
				skip,
				needsRevision,
				categories,
				sortColumn,
				sortDirection
			],
			queryFn: () => {
				return adsService.getAds({
					q,
					limit,
					skip,
					needsRevision,
					categories: categories.join(','),
					sortColumn,
					sortDirection
				})
			},
			retry: 2
		})

	useEffect(() => {
		if (isSuccess) {
			setTotalAds(data?.total)
		}

		if (isFetching || isPending) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [isSuccess, data, setTotalAds, isPending, isFetching, setIsLoading])

	return { data, isPending, isFetching, error }
}
