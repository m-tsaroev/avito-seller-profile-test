import { Group, Title } from '@mantine/core'

import styles from './EditHeader.module.scss'

const EditHeader = () => {
	return (
		<header className={styles.header}>
			<Group display='flex' justify='space-between'>
				<Group display='grid' p='8px 12' gap={0}>
					<Title order={1}>Мои объявления</Title>
				</Group>
				<Group display='grid' p='8px 12' gap={0}>
					<Title order={1}>Мои объявления</Title>
				</Group>
			</Group>
		</header>
	)
}

export { EditHeader }
