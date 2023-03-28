import React from 'react'
import { Button } from 'react-bootstrap'
import { RiFileExcel2Line } from 'react-icons/ri'
const BtnDescargarExcel = () => {
  return (
    <div>
      <Button variant='success'>Descargar <RiFileExcel2Line /> </Button>
    </div>
  )
}

export default BtnDescargarExcel
