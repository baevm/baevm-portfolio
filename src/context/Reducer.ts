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

export const SET_CURSOR = 'SET_CURSOR'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_LOADING = 'SET_LOADING'
export const SET_PARTICLES_COLOR = 'SET_PARTICLES_COLOR'

const initialState = {
  isLoading: true,
  language: 'en',
  cursorType: 'default',
  particlesColor: '#506afb',
}

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
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

    case SET_PARTICLES_COLOR: {
      return {
        ...state,
        particlesColor: action.payload,
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

export const setCursorType = (type: string) => {
  return {
    type: SET_CURSOR,
    payload: type,
  }
}

export const setParticlesColor = (color: string) => {
  return {
    type: SET_PARTICLES_COLOR,
    payload: color,
  }
}

export default Reducer
