export type AiResponse = {
	response: string
}

export type AiRequestBody = {
	model: string
	stream: boolean
	prompt: string
}
