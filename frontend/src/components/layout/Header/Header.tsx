import { Group, Loader, Text, Title } from '@mantine/core'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { DropDown } from '@/components/ui/DropDown'
import { FormatSwitch } from '@/components/ui/FormatSwitch'
import { Search } from '@/components/ui/Search'
import { ThemeButton } from '@/components/ui/ThemeButton'

import { useAdsFiltersStore } from '@/store/adsFilters'
import { useTotalAdsStore } from '@/store/totalAds'

import styles from './Header.module.scss'

const Header = () => {
	const totalAdsCount = useTotalAdsStore(state => state.totalAds)
	const isLoading = useTotalAdsStore(state => state.isLoading)

	const sortColumn = useAdsFiltersStore(state => state.sortColumn)
	const setSortColumn = useAdsFiltersStore(state => state.setSortColumn)

	const sortDirection = useAdsFiltersStore(state => state.sortDirection)
	const setSortDirection = useAdsFiltersStore(state => state.setSortDirection)

	return (
		<header className={styles.header}>
			<motion.div className={clsx(styles.body, 'container')}>
				<Group display='flex' justify='space-between'>
					<Group display='grid' p='8px 12' gap={0}>
						<Title order={1}>Мои объявления</Title>
						<Text size='xl' c='gray' className={styles.counter}>
							{isLoading ? (
								<Loader type='bars' size='sm' color='teal' />
							) : (
								totalAdsCount
							)}{' '}
							объявления
						</Text>
					</Group>
					<ThemeButton />
				</Group>
				<div className={styles.tools}>
					<Search />
					<div className={styles.format}>
						<FormatSwitch />
						<DropDown
							placeholder='Сортировать по...'
							value={
								sortColumn && sortDirection
									? sortColumn + ',' + sortDirection
									: null
							}
							onChange={value => {
								if (value) {
									const [sortCol, sortDir] = value?.split(',') as string[]

									setSortColumn(sortCol as 'title' | 'createdAt')
									setSortDirection(sortDir as 'asc' | 'desc')
								}
							}}
							onClear={() => {
								setSortColumn(null)
								setSortDirection(null)
							}}
							data={[
								{
									value: 'title,asc',
									label: 'По заголовку (А-Я)'
								},
								{
									value: 'createdAt,asc',
									label: 'По новизне (сначала новые)'
								},
								{
									value: 'title,desc',
									label: 'По заголовку (Я-А)'
								},
								{
									value: 'createdAt,desc',
									label: 'С конца (сначала старые)'
								}
							]}
							variant='border-bold'
						/>
					</div>
				</div>
			</motion.div>
		</header>
	)
}

export { Header }
