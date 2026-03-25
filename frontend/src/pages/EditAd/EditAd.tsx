import { Title } from '@mantine/core'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import { Form } from '@/components/ui/Form'

import { useAd } from '@/hooks/useAd'

import styles from './EditAd.module.scss'

const EditAd = () => {
	const { id } = useParams()

	const { data } = useAd(Number(id))

	return (
		<section className={clsx('container', styles.section)}>
			<header className={styles.header}>
				<Title order={1}>Редактирование объявления</Title>
			</header>
			<div className={styles.body}>
				{id && data && <Form id={Number(id)} data={data} />}
			</div>
		</section>
	)
}

export { EditAd }
