import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/Header'

const AdsLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export { AdsLayout }
