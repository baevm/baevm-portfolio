// @ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const CustomCursor = () => {
  const { height, width } = useWindowDimensions()
  const particlesColor = useSelector((state: any) => state.app.particlesColor)
  const cursorType = useSelector((state: any) => state.app.cursorType)
  const secondaryCursor = React.useRef(null)
  const mainCursor = React.useRef(null)
  const [pos, setPos] = React.useState({
    x: null,
    y: null,
  })

  const positionRef = React.useRef({
    mouseX: null,
    mouseY: null,
    destinationX: null,
    destinationY: null,
    distanceX: null,
    distanceY: null,
    key: -1,
  })

  React.useEffect(() => {
    const mouseMoveHandler = (event) => {
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
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
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

  // main cursor = inside dot
  // secondary cursor = border
  return (
    <div className={`cursor-wrapper ${cursorType}`}>
      <div className={'main_cursor'} ref={mainCursor}>
        <div className={'main_cursor_background'}></div>
      </div>
      <div className={'secondary_cursor'} ref={secondaryCursor}>
        <div className={'cursor_background'}></div>
      </div>
      <div className={'particles'}>
        <svg
          width='calc(100vw + 50px)'
          height='calc(100vh + 50px)'
          viewBox={`0 0 ${width ? width + 50 : 0} ${height ? height + 50 : 0}`}>
          <defs>
            <filter id='blur-particles' x='-50%' y='-50%' width='863.5%' height='863.5%'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='50'></feGaussianBlur>
            </filter>
          </defs>

          <g filter='url(#blur-particles)' transform='scale(1)' transform-origin={`${pos.x} ${pos.y}`}>
            <rect fill='none' width='1777' height='581' y='0' x='0'></rect>
            {/*   <circle fill='#58a1f3' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='30vh' id='15'></circle>
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
            <circle fill='#506efb' fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='34.7vh' id='2'></circle> */}
            <circle fill={particlesColor} fillOpacity='1' cx={pos.x + 40} cy={pos.y + 50} r='35vh' id='1'></circle>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CustomCursor
