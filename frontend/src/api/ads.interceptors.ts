import axios, { type CreateAxiosDefaults } from 'axios'

import { URL } from '@/config/endpoints.config'

const options: CreateAxiosDefaults = {
	baseURL: URL,
	headers: {
		'Content-Type': 'Application/json'
	}
}

export const adsAxios = axios.create(options)

adsAxios.interceptors.response.use(
	respones => respones,
	async error => {
		throw error.response.data
	}
)
