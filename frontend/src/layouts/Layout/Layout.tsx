import { Outlet, useLocation } from 'react-router-dom'

import { AdHeader } from '@/components/layout/AdHeader'
import { EditHeader } from '@/components/layout/EditHeader'
import { Header } from '@/components/layout/Header'

const Layout = () => {
	const location = useLocation()

	const isAdPage =
		!!location.pathname.replace('/ads', '') &&
		!location.pathname.includes('edit')

	const isEditPage = location.pathname.includes('edit')

	return (
		<>
			{isAdPage ? <AdHeader /> : isEditPage ? <EditHeader /> : <Header />}
			<main>
				<Outlet />
			</main>
		</>
	)
}

export { Layout }
