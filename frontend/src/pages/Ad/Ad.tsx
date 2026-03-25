import { Group, Loader, Text, Title } from '@mantine/core'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import { CharactersList } from '@/components/ui/CharactersList'
import { ImagesSlider } from '@/components/ui/ImagesSlider'
import { ImproveNotification } from '@/components/ui/ImproveNotification'

import { useAd } from '@/hooks/useAd'

import styles from './Ad.module.scss'

const Ad = () => {
	const { id } = useParams()

	const { data, isFetching, isPending } = useAd(Number(id))

	return (
		<>
			<section>
				<div className={clsx('container', styles.body)}>
					{isFetching || isPending ? (
						<div className={styles.loader}>
							<Loader color='teal' type='bars' size='lg' />
						</div>
					) : (
						<>
							<Group display='grid' gap='32px' className={styles.info}>
								<ImagesSlider />
								<Group display='grid' gap='16px' className={styles.description}>
									<Title order={4}>Описание</Title>
									<Text>
										{data?.description === ''
											? 'Описание отсутствует'
											: data?.description}
									</Text>
								</Group>
							</Group>
							<div className={styles.characters}>
								{data && (
									<ImproveNotification
										params={data.params}
										category={data.category}
									/>
								)}
								<Group display='grid' gap='16px'>
									<Title order={4}>Характеристики</Title>
									{data && <CharactersList params={data?.params} />}
								</Group>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	)
}

export { Ad }
