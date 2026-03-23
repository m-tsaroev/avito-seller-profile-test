import { Pagination } from '@mantine/core'

import { useAdsFiltersStore } from '@/store/adsFilters'
import { useTotalAdsStore } from '@/store/totalAds'

import styles from './PagesPagination.module.scss'

const PagesPagination = () => {
	const activePage = useAdsFiltersStore(state => state.activePage)
	const setActivePage = useAdsFiltersStore(state => state.setActivePage)
	const limit = useAdsFiltersStore(state => state.limit)
	const totalAds = useTotalAdsStore(state => state.totalAds)

	return (
		<Pagination
			total={Math.ceil(totalAds / limit)}
			value={activePage}
			onChange={setActivePage}
			className={styles.pagination}
			radius='md'
		/>
	)
}

export { PagesPagination }
