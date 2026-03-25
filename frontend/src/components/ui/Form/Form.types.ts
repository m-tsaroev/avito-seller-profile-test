import type { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

import type { AdResponse } from '@/types/AdResponse.types'

export type FormProps = {
	id: number
	data: AdResponse
	refetchFn: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<AdResponse, Error>>
}
