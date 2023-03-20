import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const RoutesWithNotFound = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Route path='*' element={<NotFound />} />
    </BrowserRouter>
  )
}

export default RoutesWithNotFound
