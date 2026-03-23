import { Box, Button, Checkbox, Collapse, Switch, Title, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { useAdsFiltersStore } from '@/store/adsFilters'

import styles from './FiltersSidebar.module.scss'

const FiltersSidebar = () => {
	const [opened, { toggle }] = useDisclosure(false)

  const {colorScheme} = useMantineColorScheme()

	const categories = useAdsFiltersStore(state => state.categories)
	const toggleCategories = useAdsFiltersStore(state => state.toggleCategory)
	const resetCategories = useAdsFiltersStore(state => state.resetCategories)
	const needsRevision = useAdsFiltersStore(state => state.needsRevision)
	const setNeedsRevision = useAdsFiltersStore(state => state.setNeedsRevision)

	return (
		<aside className={styles.sidebar}>
			<div className={styles.body}>
				<Title order={5}>Фильтры</Title>
				<Box className={styles.categories}>
					<button onClick={() => toggle()} className={styles.button}>
						Катрегории
						{opened ? <IoIosArrowDown /> : <IoIosArrowUp />}
					</button>
					<Collapse
						in={opened}
						transitionDuration={200}
						transitionTimingFunction='linear'
					>
						<Box className={styles.collapse}>
							<Checkbox
								label='Авто'
								checked={categories.includes('auto')}
								onChange={() => {
									toggleCategories('auto')
								}}
							/>
							<Checkbox
								label='Электроника'
								checked={categories.includes('electronics')}
								onChange={() => {
									toggleCategories('electronics')
								}}
							/>
							<Checkbox
								label='Недвижимость'
								checked={categories.includes('real_estate')}
								onChange={() => {
									toggleCategories('real_estate')
								}}
							/>
						</Box>
					</Collapse>
				</Box>
				<div className={styles.switch}>
					<Switch
						checked={needsRevision}
						withThumbIndicator={false}
						labelPosition='left'
						label='Только требующие доработок'
						onChange={event => {
							setNeedsRevision(event.target.checked)
						}}
						fw={600}
						size='md'
					/>
				</div>
			</div>
			<Button
				onClick={() => {
					resetCategories()
					setNeedsRevision(false)
				}}
				type='button'
				variant={colorScheme === 'light' ? 'white' : 'default'}
				c='gray'
				fw={400}
				size='md'
				radius='md'
				w='100%'
			>
				Сбросить фильтры
			</Button>
		</aside>
	)
}

export { FiltersSidebar }
