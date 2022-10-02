import { useDispatch } from 'react-redux'
import { setParticlesColor } from '../redux/Reducer'

export default function useParticlesColor() {
  const dispatch = useDispatch()

  const changeParticlesColor = (particlesColor: string) => {
    return dispatch(setParticlesColor(particlesColor))
  }

  return { changeParticlesColor }
}
