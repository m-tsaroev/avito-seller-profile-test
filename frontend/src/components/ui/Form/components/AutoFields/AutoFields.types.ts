import type { UseFormReturn } from 'react-hook-form'

import type { AdFormValues } from '@/hooks/useUpdateForm'

export type AutoFieldsProps = {
	form: UseFormReturn<AdFormValues>
}
