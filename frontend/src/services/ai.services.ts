import type { AdFormValues } from '@/hooks/useUpdateForm'

import { getAveragePricePrompt, getPrompt } from '@/utils/getPrompt'

import type { AiRequestBody, AiResponse } from '@/types/Ai.types'

import { aiAxios } from '@/api/ai.interceptors'

class AiService {
	async prompt(adData: AdFormValues, isDescriptionPrompt = true) {
		const response = await aiAxios<AiResponse>({
			data: {
				...aiAxios.defaults.data,
				prompt: getPrompt(adData, isDescriptionPrompt)
			}
		})

		return response.data
	}

	async getMarketPrice(prompt: AiRequestBody['prompt']) {
		const response = await aiAxios<AiResponse>({
			data: {
				...aiAxios.defaults.data,
				prompt: getAveragePricePrompt(prompt)
			}
		})

		return response.data
	}
}

export const aiSrvice = new AiService()
