import Reducer from './Reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    app: Reducer,
  },
})

export default store
