import { SetStateAction, useEffect, useState } from 'react'
// use state with dependancy
export function useStateWithDep<S>(defaultValue: any): [S, React.Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return [value, setValue]
}
