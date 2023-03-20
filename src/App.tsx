import React, { lazy } from 'react'
import './core/styles/App.css'

import LayoutPage from './core/layout/LayoutPage'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './core/constants/TypeRouter'
import Loadable from './core/components/Loader/Loadable'
import NotFound from './core/components/NotFound/NotFound'

import { UserKey } from './store/user'

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = PublicRoutes.LOGIN,
  children
}: any) => {
  console.log('ProtectedRouter', isAllowed)
  if (!isAllowed || isAllowed === undefined || isAllowed === null) {
    return <Navigate to={redirectPath} replace />
  }

  return children || <Outlet />
}

/// page components
const LoginPage = Loadable(lazy(() => import('./auth/LoginsPage'))) // Login
const FrmIngresoOperacion = Loadable(lazy(() => import('./pages/OperationsImcome/FormIngresoOperacion'))) // Login
const HomePage = Loadable(lazy(() => import('./pages/Home/HomePage'))) // Login
let userStore: any = ''

try {
  userStore = JSON.parse(localStorage.getItem(UserKey) || '')
} catch (error) {

}

function App () {
  console.log('userStore', userStore)

  return (

    <Routes>

      <Route index element={<Navigate to={PrivateRoutes.APP} />} />
      <Route path='/' element={<Navigate to={PrivateRoutes.APP} />} />
      <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />

      <Route element={<LayoutPage />}>
        <Route element={<ProtectedRoute isAllowed={userStore.active} />}>
          <Route path={PrivateRoutes.INCOME_OPERATIONS} element={<FrmIngresoOperacion />} />
          <Route path={PrivateRoutes.APP} element={<HomePage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>

  )
}

export default App
