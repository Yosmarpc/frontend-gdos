import React, { useMemo } from 'react'
import FrmLogins from './components/FrmLogins'
import { Box } from '@mui/material'
import { TITLE_PROJECT } from '../core/constants/Setting'
import { DataUser } from '../core/constants/DataUser'
import { PrivateRoutes } from '../core/constants/TypeRouter'
import { Navigate } from 'react-router-dom'

const LoginsPage = () => {
  useMemo(() => {
    console.log('DataUser.active ==>', DataUser.active)
    if (DataUser.active) {
      return <Navigate to={PrivateRoutes.APP} />
    }
  }, [])

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
