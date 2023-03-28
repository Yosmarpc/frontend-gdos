import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

export const OptionsType = (props: any) => {
  return (
    <div>
      <div>--{JSON.stringify(props.dataOperations)}--</div>
      <FormControl>
        <FormLabel id='demo-row-radio-buttons-group-label'>Tipo Empresa</FormLabel>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel value='Empresa' control={<Radio />} label='Empresa' />
          <FormControlLabel value='Persona' control={<Radio />} label='Persona' />

        </RadioGroup>
      </FormControl>
    </div>
  )
}
