import { Loader } from '@mantine/core'
import clsx from 'clsx'
import { AnimatePresence, type Variants, motion, stagger } from 'framer-motion'

import { AdCard } from '@/components/ui/AdCard'
import { FiltersSidebar } from '@/components/ui/FiltersSidebar'
import { PagesPagination } from '@/components/ui/PagesPagination'

import { useShowCardsFormatStore } from '@/store/showCardsFormat'

import { useAds } from '@/hooks/useAds'

import styles from './Ads.module.scss'

const containerVariants: Variants = {
	visible: {
		transition: {
			delayChildren: stagger(0.08)
		}
	}
}

const Ads = () => {
	const titleId = 'ads'

	const { data, isFetching, isPending } = useAds()

	const isListFormat = useShowCardsFormatStore(state => state.isListFormat)

	return (
		<section aria-labelledby={titleId}>
			<h2 id={titleId} className='visually-hidden'>
				Объявления
			</h2>
			<div className={clsx('container', styles.body)}>
				<FiltersSidebar />
				<AnimatePresence>
					<div className={styles.pages}>
						{isFetching || isPending ? (
							<div className={styles.loader}>
								<Loader color='teal' type='bars' size='lg' />
							</div>
						) : (
							<motion.div
								variants={containerVariants}
								initial='hidden'
								animate='visible'
								exit='hidden'
								className={clsx(styles.ads, {
									[styles.listFormat]: isListFormat
								})}
							>
								{data?.items.map(
									({ title, id, price, category, needsRevision }) => (
										<AdCard
											title={title}
											id={id}
											price={price}
											category={category}
											needsRevision={needsRevision}
											key={id}
										/>
									)
								)}
							</motion.div>
						)}
						<PagesPagination />
					</div>
				</AnimatePresence>
			</div>
		</section>
	)
}

export { Ads }
