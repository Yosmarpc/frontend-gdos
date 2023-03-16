import { TextField } from '@mui/material'
import * as React from 'react'

import { SIZE_INPUT } from '../../constants/Setting'
import { format, validate } from 'rut.js'

const PXRut = (props: any) => {
  const [rut, setRut] = React.useState('')
  const [isValid, setIsValid] = React.useState(true)

  const validateRut = (rut: any) => {
    setIsValid(validate(rut) || rut === '')
    props.sendRut(rut)
  }

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Rut'
        variant='outlined'
        placeholder='p.e. 1234K'
        className={!isValid ? 'custom-class text-center' : 'text-center'}
        value={rut === '' ? rut : format(rut)}
        onChange={(e) => {
          setRut(e.target.value)
        }}
        onBlur={(e) => validateRut(e.target.value)}
        error={!isValid}
        helperText={isValid ? '' : 'Inválido, por favor verifique.'}
        inputProps={{ maxLength: 12 }}
        required
        size={SIZE_INPUT}
        fullWidth
      />
    </div>
  )
}

export default PXRut
