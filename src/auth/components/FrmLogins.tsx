import { TextField } from '@mui/material'

import React from 'react'
import { Button } from 'react-bootstrap'

// import { useNavigate } from 'react-router-dom'
import { ItemUser } from '../models/IUserItem'
import { validateEmail } from '../../core/helpers/ValidateEmail/ValidateEmail'
import { useSnackbar } from 'notistack'
import { useAppDispatch } from '../../store/Store'
// import { useNavigate } from 'react-router-dom'
import { loginUserStore } from '../../store/user'
import { DataUser } from '../../core/helpers/Dummy/dum-user/DataUser'
import { PrivateRoutes } from '../../core/constants/TypeRouter'
// import { PublicRoutes } from '../../../Constants/PublicRoutes'

// import { webApiService } from '../../../Services'
// import { loginUserStore } from '../../../Store/user'

const FrmLogins = () => {
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [data, setData] = React.useState<{
    loading: boolean
    dataResult: ItemUser[]
    email: string
    password: string
  }>({
    loading: false,
    dataResult: [],
    email: 'admin@admin.com',
    password: 'admin'
  })

  const loadLogin = (email: string, password: string) => {
    setData({ ...data, loading: true })

    if (email === '' || password === '') {
      enqueueSnackbar('indique parametros para iniciar sesión', { variant: 'info' })
      setData({ ...data, loading: false })
    } else if (email === 'admin@admin.com' && password === 'admin') {
      dispatch(loginUserStore({ ...DataUser, active: true }))
      setData({ ...data, loading: false })
      window.location.replace(PrivateRoutes.APP)
    } else {
      enqueueSnackbar('Credeciales no validas', { variant: 'error' })
      setData({ ...data, loading: false })
    }

    /* if (email === '' || password === '') {
      enqueueSnackbar('indicate parameters', { variant: 'info' })
    } else {
      const dataBody = {
        email,
        password
      }

      setData({ ...data, loading: true })
      webApiService
        .getLogin(dataBody)
        .then(resp => {
          if (resp.success) {
            dispatch(loginUserStore(resp.data))
            setTimeout(() => {
              navigate(PublicRoutes.APP, { replace: true })
              window.location.reload()
            }, 1000)
          } else {
            enqueueSnackbar('Email/Password incorrect', { variant: 'warning' })
            setData({ ...data, loading: false })
          }
        })
        .catch((error: any) => {
          console.log('error a iniciar session', error.message)
          enqueueSnackbar(error.message, { variant: 'error' })
        })
        .finally(() => {
          setData({ ...data, loading: false })
        })
    } */
  }

  return (
    <div className='row my-4 shadow p-3 mb-5 bg-body-tertiary rounded'>

      <div className='col-12 my-4'>
        <TextField
          label='Email'
          id='outlined-start-adornment'
          fullWidth
          placeholder='example@example.com'
          className='TextField'
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          onBlur={e => {
            validateEmail(data.email)
          }}
          error={data.email !== '' && !validateEmail(data.email)}
          helperText={
            data.email !== '' && !validateEmail(data.email)
              ? 'correo no valido'
              : ''
          }
        />
      </div>
      <div className='col-12 my-4'>
        <TextField
          type='password'
          id='outlined-multiline-flexible'
          label='Password'
          fullWidth
          className='TextField'
          value={data.password}
          onChange={e => setData({ ...data, password: e.target.value })}
        />
      </div>

      <div className='col-12 my-4'>
        <Button
          variant='primary'
          className='w-100'
          onClick={() => loadLogin(data.email, data.password)}
          disabled={data.loading}
        >
          {data.loading ? 'Loading' : 'Inicie Sesión '}
        </Button>
      </div>
      <div className='col-12 my-4'>
        <Button variant='link'>¿No tienes acceso?</Button>
      </div>

      <div className='col-12 my-4' />
    </div>
  )
}

export default FrmLogins
