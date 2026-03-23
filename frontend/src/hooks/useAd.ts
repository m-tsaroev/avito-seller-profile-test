import { useQuery } from '@tanstack/react-query'

import { adsService } from '@/services/ads.services'

import type { AdResponse } from '@/types/AdResponse.types'

export const useAd = (id: number) => {
	const { data, isPending, isFetching } = useQuery<AdResponse>({
		queryKey: ['ad', id],
		queryFn: () => adsService.getAd(id),
		retry: 2
	})

	return { data, isPending, isFetching }
}
