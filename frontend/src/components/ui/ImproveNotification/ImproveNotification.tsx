import { Group, List, ListItem, Text, Title } from '@mantine/core'
import { AiFillExclamationCircle } from 'react-icons/ai'

import { getEmptyFields } from '@/utils/getEmptyFields'

import styles from './ImproveNotification.module.scss'
import type { ImproveNotificationProps } from './ImproveNotification.types'

const ImproveNotification = (props: ImproveNotificationProps) => {
	const { params, category } = props

	return (
		getEmptyFields(params, category).length !== 0 && (
			<Group
				display='flex'
				gap='16px'
				align='start'
				className={styles.notification}
			>
				<AiFillExclamationCircle color='#FFA940' size={18} />
				<Group display='grid' gap='4px'>
					<Title fw={600} order={5}>
						Требуются доработки
					</Title>
					<div>
						<Text fz='14px'>У объявления не заполнены поля:</Text>
						<List className={styles.list} size='sm'>
							{getEmptyFields(params, category).map(character => (
								<ListItem className={styles.item} key={character}>
									{character}
								</ListItem>
							))}
						</List>
					</div>
				</Group>
			</Group>
		)
	)
}

export { ImproveNotification }
