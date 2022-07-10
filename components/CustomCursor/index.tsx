// @ts-nocheck
import React, { useContext } from 'react'
import styles from './style.module.scss'
import CustomCursorContext from './Context/CustomCursorContext'

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  const secondaryCursor = React.useRef(null)
  const mainCursor = React.useRef(null)
  const particles = React.useRef(null)
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event

      const mouseX = clientX
      const mouseY = clientY

      let calculatedX = mouseX - secondaryCursor.current.clientWidth / 2
      let calculatedY = mouseY - secondaryCursor.current.clientHeight / 2
      positionRef.current.mouseX = calculatedX
      positionRef.current.mouseY = calculatedY
      setPos({ x: calculatedX, y: calculatedY })
      mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${
        mouseY - mainCursor.current.clientHeight / 2
      }px, 0)`
    })

    return () => {}
  }, [])

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.7
        positionRef.current.distanceY = (mouseY - destinationY) * 0.7
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
    }
    followMouse()
  }, [])
  return (
    <div className={`${styles.cursor_wrapper} ${type}`}>
      <div className={styles.main_cursor} ref={mainCursor}>
        <div className={styles.main_cursor_background}></div>
      </div>
      <div className={styles.secondary_cursor} ref={secondaryCursor}>
        <div className={styles.cursor_background}></div>
      </div>
      <div className={styles.particles}>
        <svg width='100vw' height='100vh' viewBox='0 0 100vw 100vh'>
          <defs>
            <filter id='blur-particles' x='-50%' y='-50%' width='863.5%' height='863.5%'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='50'></feGaussianBlur>
            </filter>
          </defs>
          <g filter='url(#blur-particles)' transform='scale(1)' transform-origin={`${pos.x} ${pos.y}`}>
            <rect fill='none' width='1777' height='581' y='0' x='0'></rect>
            <circle fill='#58a1f3' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='30vh' id='15'></circle>
            <circle fill='#579df4' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='30.1vh' id='14'></circle>
            <circle fill='#5799f4' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='30.5vh' id='13'></circle>
            <circle fill='#5695f5' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='30.8vh' id='12'></circle>
            <circle fill='#5691f5' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='31.1vh' id='11'></circle>
            <circle fill='#558df6' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='31.3vh' id='10'></circle>
            <circle fill='#5489f7' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='31.6vh' id='9'></circle>
            <circle fill='#5485f7' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='31.9vh' id='8'></circle>
            <circle fill='#5382f8' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='32.2vh' id='7'></circle>
            <circle fill='#537ef8' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='32.5vh' id='6'></circle>
            <circle fill='#527af9' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='32.8vh' id='5'></circle>
            <circle fill='#5176fa' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='33.1vh' id='4'></circle>
            <circle fill='#5172fa' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='33.4vh' id='3'></circle>
            <circle fill='#506efb' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='34.7vh' id='2'></circle>
            <circle fill='#506afb' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='35h' id='1'></circle>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CustomCursor
