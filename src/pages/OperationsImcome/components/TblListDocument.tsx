import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { colorBlackSecondary } from '../../../core/constants/Colores'

const TblListDocument = () => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: colorBlackSecondary }}>
              <TableCell className='fw-bold text-white'>Tipo Documento</TableCell>
              <TableCell className='fw-bold text-white'>Nombre Documento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Aprobación Comercial</TableCell>
              <TableCell>Ficha General</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aprobación de crédito</TableCell>
              <TableCell>Aprobación </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TblListDocument
