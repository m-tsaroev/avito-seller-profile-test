import {
	Badge,
	Card,
	CardSection,
	Group,
	Image,
	Text,
	Title,
	useMantineColorScheme
} from '@mantine/core'
import clsx from 'clsx'
import { type Variants, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useShowCardsFormatStore } from '@/store/showCardsFormat'

import { cutString } from '@/utils/cutString'
import { getSystemTheme } from '@/utils/getSystemTheme'

import { AD_TYPE } from '@/config/adType'

import styles from './AdCard.module.scss'
import type { AdCardProps } from './AdCard.types'

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0
	}
}

const MotionLink = motion(Link)

const AdCard = (props: AdCardProps) => {
	const { title, id, price, category, needsRevision } = props

	const { colorScheme } = useMantineColorScheme()

	const isListFormat = useShowCardsFormatStore(state => state.isListFormat)

	return (
		<MotionLink
			style={{
				textDecoration: 'none'
			}}
			variants={cardVariants}
			to={id.toString()}
		>
			<Card
				color='#ffffff'
				withBorder
				padding='sm'
				radius='lg'
				className={clsx(styles.ad, {
					[styles.listFormat]: isListFormat
				})}
			>
				{isListFormat ? (
					<div className={styles.head}>
						<Image
							height={isListFormat ? 132 : 150}
							width='auto'
							src='/cover.png'
							alt='Фото товара'
							radius={8}
						/>
						{!isListFormat && (
							<div className={styles.typeBadge}>
								<Text>{AD_TYPE[category]}</Text>
							</div>
						)}
					</div>
				) : (
					<CardSection className={styles.head}>
						<Image
							height={isListFormat ? 132 : 150}
							width='auto'
							src='/cover.png'
							alt='Фото товара'
							radius={8}
						/>
						{!isListFormat && (
							<div className={styles.typeBadge}>
								<Text>{AD_TYPE[category]}</Text>
							</div>
						)}
					</CardSection>
				)}
				<Group display='grid' gap='4px'>
					{isListFormat && (
						<Text c='gray' fz='xs'>
							{AD_TYPE[category]}
						</Text>
					)}
					<Title order={5}>{isListFormat ? title : cutString(title)}</Title>
					<Text c='gray' fw={600} lh={1.4} size='md'>
						{price} ₽
					</Text>
					{needsRevision && (
						<Badge
							variant='dot'
							color={
								colorScheme === 'light' || getSystemTheme() === 'light'
									? '#FAAD14'
									: '#000000'
							}
							className={styles.badge}
							radius='md'
							fw={400}
							size='lg'
							bd='none'
						>
							Требует доработок
						</Badge>
					)}
				</Group>
			</Card>
		</MotionLink>
	)
}

export { AdCard }
