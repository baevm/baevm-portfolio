import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import styles from './style.module.scss'

const Images = ({ images }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {images.map((image: any) => (
          <img
            key={image.id}
            src={image.url}
            className={styles.embla__slide}
            /*  layout='fill' */
            /*  quality={75} */
            alt='project image'
          />
        ))}
      </div>

      <button className={styles.embla__prev} onClick={scrollPrev}>
        <IoArrowBack size='20' />
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
        <IoArrowForward size='20' />
      </button>
    </div>
  )
}

export default Images
