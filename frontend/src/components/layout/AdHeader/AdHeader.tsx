import { Button, Group, Text, Title } from '@mantine/core'
import clsx from 'clsx'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { useAdInfoStore } from '@/store/adInfo'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/config/paths.config'

import styles from './AdHeader.module.scss'

const AdHeader = () => {
	const { id, title, price, createdAt, updatedAt } = useAdInfoStore(
		state => state.ad
	)
	const isLoading = useAdInfoStore(state => state.isLoading)

	return (
		<header className={styles.header}>
			<div className={clsx('container', styles.body)}>
				{!isLoading && (
					<Group display='flex' justify='space-between'>
						<Group display='grid' gap='12px'>
							<Title order={1}>{title}</Title>
							{id && (
								<Button
									radius='md'
									component={Link}
									to={PATHS.AD_EDIT(id.toString())}
									className={styles.button}
								>
									Редактировать <AiOutlineEdit />
								</Button>
							)}
						</Group>
						<Group
							p='8px 12'
							gap={0}
							display='flex'
							style={{
								flexDirection: 'column',
								alignItems: 'end'
							}}
						>
							<Title order={2}>{price} ₽</Title>
							<Group
								display='flex'
								style={{
									flexDirection: 'column',
									alignItems: 'end'
								}}
								gap='4px'
							>
								{createdAt && (
									<Text size='md' c='dimmed'>
										Опубликован: ${formatDate(createdAt)}
									</Text>
								)}
								{updatedAt && (
									<Text size='md' c='dimmed'>
										Отредактировано: ${formatDate(updatedAt)}
									</Text>
								)}
							</Group>
						</Group>
					</Group>
				)}
			</div>
		</header>
	)
}

export { AdHeader }
