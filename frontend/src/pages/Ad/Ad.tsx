import { useParams } from 'react-router-dom'

const Ad = () => {
	const { id } = useParams()

	return <div>AD {id}</div>
}

export { Ad }
