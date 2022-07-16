export type CursorLookType = 'slider-hover' | 'slider-drag' | 'text' | 'link' | 'hamburger' | 'default'

export type State = {
  isLoading: boolean
  isDarkTheme: boolean
  language: string
  cursorType: CursorLookType
  particlesColor: string
}

type ACTIONTYPE =
  | { type: 'CHANGE_THEME' }
  | { type: 'SET_CURSOR'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: string }

export const CHANGE_THEME = 'CHANGE_THEME'
export const SET_CURSOR = 'SET_CURSOR'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_LOADING = 'SET_LOADING'


const initialState = {
  isLoading: true,
  theme: 'light',
  language: 'en',
  cursorType: 'default',
  particlesColor: '',
}

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload
      }
    }
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      }
    }
    case SET_CURSOR: {
      return {
        ...state,
        cursorType: action.payload,
      }
    }

    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export const showLoading = () => {
  return {
    type: SET_LOADING,
    payload: true,
  }
}

export const hideLoading = () => {
  return {
    type: SET_LOADING,
    payload: false,
  }
}

export const changeTheme = (value: any) => {
  localStorage.setItem('theme', value)

  return {
    type: 'CHANGE_THEME', payload: value
  }
}

export default Reducer
