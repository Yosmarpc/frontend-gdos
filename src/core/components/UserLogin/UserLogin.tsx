import React from 'react'
import { Button } from 'react-bootstrap'
import { PublicRoutes } from '../../constants/TypeRouter'

const UserLogin = () => {
  return (
    <div className='card' style={{ width: '200px', margin: '10px' }}>

      <div className='card-body'>
        <h5 className='card-title text-center'>Yosmar Hinestroza</h5>
        <p className='card-text text-center'>Desarrollador de Software.</p>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='btn-sm' href={PublicRoutes.LOGIN}>Cerrar Sesión</Button>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
