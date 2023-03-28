import React, { useEffect } from 'react'
import FrmLogins from './components/FrmLogins'
import { Box } from '@mui/material'
import { TITLE_PROJECT } from '../core/constants/Setting'

import { PrivateRoutes } from '../core/constants/TypeRouter'
import { useNavigate } from 'react-router-dom'
import { UserKey } from '../store/user'
let userStore: any = ''

try {
  userStore = JSON.parse(localStorage.getItem(UserKey) || '')
} catch (error) {

}
const LoginsPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (userStore.active) {
      navigate(PrivateRoutes.APP)
    }
  }, [navigate])

  return (
    <section className='h-100'>
      <div className='container-fluid h-100'>
        <div className='row h-100'>
          <div className='col-12 bg-light h-100 d-flex justify-content-center align-items-center'>
            <Box
              sx={{
                display: 'flex',
                width: '90%',
                height: '100vh',
                flexDirection: 'column',
                maxWidth: '320px',
                margin: '0 auto'
              }}
            >
              <div className='mt-4 h2 text-dark text-center mt-xl-5'>
                <div className='fs-6'> Inicio de Sesión</div>

              </div>
              <div>
                <div className='fs-3 text-center'><b>{TITLE_PROJECT}</b></div>
                <FrmLogins />
              </div>
              <div className='text-center'>
                <span className='caption'>Todo los derechos reservados</span>
              </div>
            </Box>
          </div>
          <div className='col-12 col-lg-8  d-none d-lg-flex justify-content-center align-items-center' />
        </div>
      </div>
    </section>
  )
}

export default LoginsPage
