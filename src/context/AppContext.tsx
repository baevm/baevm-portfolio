import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { initialState, Reducer, State } from './Reducer'

type Dispatch = {
  type: string
  payload?: any
}

type ContextProps = {
  state: any
  dispatch: ({ type, payload }: Dispatch) => void
}

const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
})

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const contextValue: ContextProps = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
