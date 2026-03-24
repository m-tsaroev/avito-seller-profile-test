import { Image } from '@mantine/core'
import clsx from 'clsx'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react'

import styles from './ImagesSlider.module.scss'

import 'swiper/css'

const slides = ['/slide-cover.png', '/slide-cover.png', '/slide-cover.png']

const ImagesSlider = () => {
	const [instance, instanceSetter] = useState<SwiperClass | null>(null)
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	return (
		<div className={styles.slider}>
			<Swiper
				onSwiper={instanceSetter}
				onSlideChange={swiper => {
					setActiveSlideIndex(swiper.activeIndex)
				}}
				modules={[Navigation, Pagination]}
				loop
				style={{
					position: 'relative'
				}}
			>
				{slides.map((img, index) => (
					<SwiperSlide key={index}>
						<Image src={img} height={400} fit='contain' />
					</SwiperSlide>
				))}

				<div className={styles.buttons}>
					<button
						type='button'
						className={styles.button}
						onClick={() => {
							instance?.slidePrev()
						}}
					>
						<IoIosArrowBack size={32} />
					</button>

					<button
						type='button'
						className={styles.button}
						onClick={() => {
							instance?.slideNext()
						}}
					>
						<IoIosArrowForward size={32} />
					</button>
				</div>
			</Swiper>

			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				freeMode
				watchSlidesProgress
				style={{ marginTop: 16 }}
			>
				{slides.map((img, index) => (
					<SwiperSlide
						onClick={() => {
							instance?.slideTo(index)
						}}
					>
						<div
							className={clsx(styles.paginationSlide, {
								[styles.isActive]: activeSlideIndex === index
							})}
						>
							<Image src={img} height={80} fit='contain' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export { ImagesSlider }
