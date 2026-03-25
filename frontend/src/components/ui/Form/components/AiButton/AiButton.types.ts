import type { AiResponse } from '@/types/Ai.types'

export type AiButtonProps = {
  label: string
	applyFunction: () => void
	aiFunction: () => void
	text: AiResponse['response']
  acceptApply: boolean
  isLoading: boolean
}
