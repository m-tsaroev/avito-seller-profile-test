import clsx from 'clsx'
import { AiOutlineAppstore } from 'react-icons/ai'
import { MdFormatListBulleted } from 'react-icons/md'

import { useShowCardsFormatStore } from '@/store/showCardsFormat'

import styles from './FormatSwitch.module.scss'

const FormatSwitch = () => {
	const { setIsListFormat, isListFormat } = useShowCardsFormatStore(
		state => state
	)

	return (
		<div className={styles.switcher}>
			<button
				className={clsx(styles.button, {
					[styles.isActive]: !isListFormat
				})}
				onClick={() => setIsListFormat(false)}
			>
				<AiOutlineAppstore size={18} />
			</button>
			<span className={styles.line}></span>
			<button
				className={clsx(styles.button, {
					[styles.isActive]: isListFormat
				})}
				onClick={() => setIsListFormat(true)}
			>
				<MdFormatListBulleted size={18} />
			</button>
		</div>
	)
}

export { FormatSwitch }
