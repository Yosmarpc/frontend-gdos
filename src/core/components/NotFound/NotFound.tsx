import React from 'react'
import { Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='row gy-2 p-5 '>
        <div className='col-12 col-lg-3' />
        <div className='col-12 col-lg-6 gy-2 p-4'>
          <div className='card align-text-bottom shadow p-0 bg-body rounded'>
            <div className='card-content my-4'>

              <div className='text-center display-1'>Oops </div>
              <h6 className='text-center my-3'>
                <b>URL no válida </b>
              </h6>
              <h6 className='text-center'>
                <b>No tiene permisos suficientes </b>
              </h6>
              <div className='text-center pt-3'>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => navigate(-1)}
                >
                  Página anterior
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
