import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRoutes } from './route/mainRoutes'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoutes} />
    </div>
  )
}

export default App