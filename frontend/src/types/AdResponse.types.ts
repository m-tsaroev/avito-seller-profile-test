import type { ItemUpdateIn } from '@/types/AdUpdateRequest.types'

export type AdResponse = ItemUpdateIn & {
	description: string
	createdAt: string
	updatedAt: string
}
