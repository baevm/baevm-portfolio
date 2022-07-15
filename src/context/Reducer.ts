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

const initialState = {
  isLoading: true,
  isDarkTheme: false,
  language: 'en',
  cursorType: 'default',
  particlesColor: '',
}

export const CHANGE_THEME = 'CHANGE_THEME'
export const SET_CURSOR = 'SET_CURSOR'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_LOADING = 'SET_LOADING'

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
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

export default Reducer
