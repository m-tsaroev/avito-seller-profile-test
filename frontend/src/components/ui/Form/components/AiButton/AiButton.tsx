import {
	Button,
	Group,
	Loader,
	Popover,
	PopoverDropdown,
	PopoverTarget,
	Text,
	Title
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { AiOutlineBulb } from 'react-icons/ai'
import { CiRedo } from 'react-icons/ci'

import type { AiButtonProps } from './AiButton.types'

const AiButton = (props: AiButtonProps) => {
	const { label, applyFunction, text, aiFunction, acceptApply, isLoading } =
		props

	const [isPriceAiTooltipOpenned, setIsPriceAiTooltipOpenned] = useState(false)
	const [isFirstTime, setIsFirstTime] = useState(true)

	const onAiPriceTooltipClose = () => {
		setIsPriceAiTooltipOpenned(false)
	}

	useEffect(() => {
		console.log(isPriceAiTooltipOpenned, !!text)
	}, [isPriceAiTooltipOpenned, text])

	return (
		<Popover
			opened={isPriceAiTooltipOpenned && !!text}
			position='top-start'
			withArrow
			shadow='md'
		>
			<PopoverTarget>
				<Button
					type='button'
					radius='8px'
					bg='#F9F1E6'
					c='#FFA940'
					fw={400}
					onClick={() => {
						setIsFirstTime(false)
						setIsPriceAiTooltipOpenned(true)
						aiFunction()
					}}
					leftSection={
						isLoading ? (
							<Loader size={12} color='#FFA940' />
						) : isFirstTime ? (
							<AiOutlineBulb />
						) : (
							<CiRedo />
						)
					}
				>
					<span>{label}</span>
				</Button>
			</PopoverTarget>

			<PopoverDropdown p='8px' maw='330px' color='white'>
				<Group style={{ display: 'grid', gap: '8px' }}>
					<Title order={6}>Ответ AI:</Title>

					<Text fz='12px' style={{ wordBreak: 'break-word' }}>
						{text}
					</Text>

					<Group>
						<Button
							type='button'
							size='compact-xs'
							onClick={() => {
								applyFunction()
								onAiPriceTooltipClose()
							}}
							disabled={!acceptApply}
						>
							Применить
						</Button>

						<Button
							type='button'
							variant='default'
							size='compact-xs'
							onClick={onAiPriceTooltipClose}
						>
							Закрыть
						</Button>
					</Group>
				</Group>
			</PopoverDropdown>
		</Popover>
	)
}

export { AiButton }
