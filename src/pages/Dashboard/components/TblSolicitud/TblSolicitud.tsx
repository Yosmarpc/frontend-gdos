/* eslint-disable no-unused-vars */
import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { Button } from '@mui/material'

import { Order, getComparator, stableSort } from '../../../../core/helpers/TblFunctions/TblFunctions'
import { useDetectWidth } from '../../../../core/constants/UseResponsive'
import { EnhancedTableHead } from './components/EnhancedTableHead'

export interface Data {
  numberOrder: number;
  client: string;
  dateRegister: Date | string,
  dateUpdate: Date | string,
  status: string;
  sla: string;
  assignedUser: string
}

function createData (
  numberOrder: number,
  client: string,
  dateRegister: Date | string,
  dateUpdate: Date | string,
  status: string,
  sla: string,
  assignedUser: string
): Data {
  return {
    numberOrder,
    client,
    dateRegister,
    dateUpdate,
    status,
    sla,
    assignedUser
  }
}

const rows: any = [
  createData(1, 'Roberto Salas', '25-03-2023', '25-03-2023', 'INGRESADA', '1', 'Roberto Salas'),
  createData(2, 'Yosmar Hinestroza', '24-03-2023', '25-03-2023', 'TOMADA', '2', 'Roberto Salas'),
  createData(3, 'Juan Flores', '25-03-2023', '25-03-2023', 'INGRESADA', '2', 'Roberto Salas')
]

export default function TblSolicitud () {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('numberOrder')
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [isWidth] = React.useState(useDetectWidth('(min-width:500px)'))

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.numberOrder)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box maxHeight={400} maxWidth='auto'>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label='Estilo de Tabla'
          sx={{ p: 1 }}
        />
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                  const isItemSelected: any = isSelected(row.numberOrder)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.numberOrder)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.numberOrder}
                      selected={isItemSelected}

                    >
                      {/**  <TableCell padding='checkbox'>
                         <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                        />
                      </TableCell> */}
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='none'
                        align='center'
                      >
                        {row.numberOrder}
                      </TableCell>
                      <TableCell align='center'>{row.client}</TableCell>
                      <TableCell align='center'>{row.dateRegister}</TableCell>
                      <TableCell align='center'>{row.dateUpdate}</TableCell>
                      <TableCell align='center'><Button variant='outlined' size='small' color='primary'>{row.status}</Button></TableCell>
                      <TableCell align='center'><Button variant='outlined' size='small' color='success'>{row.sla}</Button></TableCell>
                      <TableCell align='center'>{row.assignedUser}</TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </Box>
  )
}
