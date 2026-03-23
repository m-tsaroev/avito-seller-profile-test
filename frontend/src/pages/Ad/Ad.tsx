import { Loader } from '@mantine/core'
import { useParams } from 'react-router-dom'

import { useAd } from '@/hooks/useAd'

const Ad = () => {
	const { id } = useParams()

	const { data, isFetching, isPending } = useAd(Number(id))

	return (
		<>
			{isFetching || isPending ? (
				<Loader size='lg' type='bars' color='teal' />
			) : (
				<h1>{data?.title}</h1>
			)}
		</>
	)
}

export { Ad }
