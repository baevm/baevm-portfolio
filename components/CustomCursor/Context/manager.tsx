import React, { useState } from 'react'
import CustomCursorContext, { CursorLookType } from '../Context/CustomCursorContext'

const CustomCursorManager = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<CursorLookType>('default')

  return <CustomCursorContext.Provider value={{ type, setType }}>{children}</CustomCursorContext.Provider>
}

export default CustomCursorManager
