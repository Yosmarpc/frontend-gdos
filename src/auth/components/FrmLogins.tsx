import { TextField } from '@mui/material'

import React from 'react'
import { Button } from 'react-bootstrap'

// import { useNavigate } from 'react-router-dom'
import { ItemUser } from '../models/IUserItem'
import { validateEmail } from '../../core/helpers/ValidateEmail/ValidateEmail'
import { useSnackbar } from 'notistack'
// import { PublicRoutes } from '../../../Constants/PublicRoutes'

// import { webApiService } from '../../../Services'
// import { useAppDispatch } from '../../../Store/Store'
// import { loginUserStore } from '../../../Store/user'
// import { validateEmail } from '../../../Utils/validate'

const FrmLogins = () => {
  // const dispatch = useAppDispatch()
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
    email: '',
    password: ''
  })

  const loadLogin = (email: string, password: string) => {
    enqueueSnackbar('indicate parameters', { variant: 'info' })
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
      <div className='col-12' />
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
