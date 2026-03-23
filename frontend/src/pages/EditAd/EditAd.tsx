import { useParams } from 'react-router-dom'

const EditAd = () => {
	const { id } = useParams()

	return <div>EDIT {id}</div>
}

export { EditAd }
