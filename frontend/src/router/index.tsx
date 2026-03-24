import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Ad } from '@/pages/Ad'
import { Ads } from '@/pages/Ads'
import { EditAd } from '@/pages/EditAd'

import { PATHS } from '@/config/paths'

import { Layout } from '@/layouts/Layout'

const { ROOT, ADS, AD_EDIT, AD } = PATHS

export const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Navigate to={ADS} replace />
			},
			{
				path: ADS,
				children: [{ index: true, Component: Ads }]
			},
			{
				path: AD,
				Component: Ad
			},
			{
				path: AD_EDIT(),
				Component: EditAd
			}
		]
	}
])
