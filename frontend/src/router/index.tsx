import { Navigate, createBrowserRouter } from 'react-router-dom'

import { PATHS } from '../config/paths'
import { Ad } from '../pages/Ad'
import { Ads } from '../pages/Ads'
import { EditAd } from '../pages/EditAd'

const { ROOT, ADS, AD_EDIT, AD } = PATHS

export const router = createBrowserRouter([
	{
		path: ROOT,
		children: [
			{
				index: true,
				element: <Navigate to={ADS} replace />
			},
			{
				path: ADS,
				Component: Ads
			},
			{
				path: AD,
				Component: Ad
			},
			{
				path: AD_EDIT,
				Component: EditAd
			}
		]
	}
])
