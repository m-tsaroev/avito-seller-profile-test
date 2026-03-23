import { useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

import { Field } from '@/components/ui/Field'

import { useAdsFiltersStore } from '@/store/adsFilters'

import { useDebounce } from '@/hooks/useDebounce'

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedValue = useDebounce(searchTerm, 1000)

	const setSearch = useAdsFiltersStore(state => state.setQ)
	const setActivePage = useAdsFiltersStore(state => state.setActivePage)

	useEffect(() => {
		setSearch(debouncedValue)
		if (debouncedValue) {
			setActivePage(1)
		}
	}, [debouncedValue, setSearch, setActivePage])

	return (
		<Field
			id='search'
			label='search'
			hideLabel
			value={searchTerm}
			setValue={setSearchTerm}
			placeholder='Найти объявление....'
			type='search'
			icon={IoSearchSharp}
		/>
	)
}

export { Search }
