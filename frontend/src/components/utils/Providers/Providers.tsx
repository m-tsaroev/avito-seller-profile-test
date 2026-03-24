import { MantineProvider, createTheme } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeFavicon } from '@/components/utils/ThemeFavicon'

import { router } from '@/router'

const theme = createTheme({
	headings: {
		sizes: {
			h1: {
				fontSize: '30px',
				lineHeight: '1.3'
			},
			h2: {
				fontSize: '30px',
				lineHeight: '1.3'
			},
			h4: {
				fontSize: '22px',
				lineHeight: '1.3'
			},
			h5: {
				fontSize: '16px',
				lineHeight: '1.5',
				fontWeight: '400'
			}
		}
	}
})

const Providers = () => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					staleTime: 1000 * 60 * 5,
					gcTime: 1000 * 60 * 10
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<MantineProvider theme={theme} defaultColorScheme='light'>
				<ThemeFavicon />
				<RouterProvider router={router} />
			</MantineProvider>
		</QueryClientProvider>
	)
}

export { Providers }
