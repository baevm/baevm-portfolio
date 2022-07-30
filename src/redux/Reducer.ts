import { createSlice } from '@reduxjs/toolkit'

export type CursorLookType = 'slider-hover' | 'slider-drag' | 'text' | 'link' | 'hamburger' | 'default'

export type State = {
  isLoading: boolean
  isDarkTheme: boolean
  language: string
  cursorType: CursorLookType
  particlesColor: string
}

const initialState = {
  isLoading: true,
  language: 'en',
  cursorType: 'default',
  particlesColor: '#506afb',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setParticlesColor(state, action) {
      return {
        ...state,
        particlesColor: action.payload,
      }
    },
    setCursorType(state, action) {
      return {
        ...state,
        cursorType: action.payload,
      }
    },

    showLoading(state) {
      return {
        ...state,
        isLoading: true,
      }
    },

    hideLoading(state) {
      return {
        ...state,
        isLoading: false,
      }
    },

    setLanguage(state, action) {
      return {
        ...state,
        language: action.payload,
      }
    },
  },
})

export const { setCursorType, setParticlesColor, showLoading, hideLoading, setLanguage } = appSlice.actions

export default appSlice.reducer
