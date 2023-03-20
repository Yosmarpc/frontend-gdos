import { Fab } from '@mui/material'
import React from 'react'
import { CgAttachment } from 'react-icons/cg'

export const BtnAdjunto = () => {
  return (
    <div>

      <Fab color='secondary' aria-label='edit'>
        <CgAttachment />

      </Fab>
    </div>
  )
}
