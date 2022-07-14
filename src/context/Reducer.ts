export type CursorLookType = 'slider-hover' | 'slider-drag' | 'text' | 'link' | 'hamburger' | 'default'

export type State = {
  isDarkTheme: boolean
  language: string
  cursorType: CursorLookType
  particlesColor: string
}

export const initialState = {
  isDarkTheme: false,
  language: 'en',
  cursorType: 'default',
  particlesColor: ''
}

type ACTIONTYPE =
  | { type: 'CHANGE_THEME' }
  | { type: 'SET_CURSOR'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: string }

export const CHANGE_THEME = 'CHANGE_THEME'
export const SET_CURSOR = 'SET_CURSOR'
export const SET_LANGUAGE = 'SET_LANGUAGE'

export const Reducer = (state: State, action: any) => {
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
    default: {
      return state
    }
  }
}
