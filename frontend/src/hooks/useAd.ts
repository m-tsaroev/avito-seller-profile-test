import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { adsService } from '@/services/ads.services'

import { useAdInfoStore } from '@/store/adInfo'

import type { AdResponse } from '@/types/AdResponse.types'

export const useAd = (id: number) => {
	const setAd = useAdInfoStore(state => state.setAd)
	const setIsLoading = useAdInfoStore(state => state.setIsLoading)

	const { data, isPending, isFetching, isSuccess } = useQuery<AdResponse>({
		queryKey: ['ad', id],
		queryFn: () => adsService.getAd(id),
		retry: 2
	})

	useEffect(() => {
		if (isSuccess) {
			setAd(data)
		}

		setIsLoading(isFetching && isPending)
	}, [isSuccess, data, isFetching, isPending, setAd, setIsLoading])

	return { data, isPending, isFetching }
}
