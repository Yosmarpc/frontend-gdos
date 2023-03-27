import React from 'react'
import { Button } from 'react-bootstrap'
import { PublicRoutes } from '../../constants/TypeRouter'
import { DataUser } from '../../helpers/Dummy/dum-user/DataUser'

const UserLogin = () => {
  return (
    <div className='card' style={{ width: '200px', margin: '10px' }}>

      <div className='card-body bg-light'>
        <div className='text-center'>
          <img
            src='https://yt3.ggpht.com/WHm-naxhgyr1MuaS6r8Oou3gF-I0sQH3q1KiBs1gt_UZkiJWEDRTvwTHmhguN9kZQuvnv01SEA=s176-c-k-c0x00ffffff-no-rj'
            className='rounded-circle'
            alt={DataUser.name}
            width='30'
            height='30'
          />
        </div>
        <div className='my-2'>
          <div className='fs-6 text-left fw-bold'>{DataUser.name}</div>
          <div className='text-left small'>{DataUser.profile}</div>
          <div className='d-flex justify-content-center my-2'>
            <Button variant='link' className='btn-sm' href={PublicRoutes.LOGIN}>Detalle Perfil</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserLogin
