import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'

import { AI_MODEL, AI_URL } from '@/config/ai.config'

const options: CreateAxiosDefaults = {
	baseURL: AI_URL,
	method: 'POST',
	data: {
		model: AI_MODEL,
		stream: false
	}
}

export const aiAxios = axios.create(options)

aiAxios.interceptors.response.use(
	respones => respones,
	async error => {
		throw error.response.data
	}
)
