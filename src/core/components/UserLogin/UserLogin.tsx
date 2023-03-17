import React from 'react'
import { Button } from 'react-bootstrap'
import { PublicRoutes } from '../../constants/TypeRouter'
import { DataUser } from '../../constants/DataUser'

const UserLogin = () => {
  return (
    <div className='card' style={{ width: '200px', margin: '10px' }}>

      <div className='card-body'>
        <img src='https://yt3.ggpht.com/WHm-naxhgyr1MuaS6r8Oou3gF-I0sQH3q1KiBs1gt_UZkiJWEDRTvwTHmhguN9kZQuvnv01SEA=s176-c-k-c0x00ffffff-no-rj' className='rounded' alt={DataUser.name} />
        <h5 className='card-title text-center'>{DataUser.name}</h5>
        <div className='text-center small'>{DataUser.profile}</div>
        <div className='d-flex justify-content-center'>
          <Button variant='primary' className='btn-sm' href={PublicRoutes.LOGIN}>Cerrar Sesión</Button>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
