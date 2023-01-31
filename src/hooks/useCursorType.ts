import { useDispatch } from 'react-redux'
import { setCursorType } from '@redux/Reducer'

export default function useCursorType() {
  const dispatch = useDispatch()

  const changeCursorType = (value: string) => {
    return dispatch(setCursorType(value))
  }

  return { changeCursorType }
}
