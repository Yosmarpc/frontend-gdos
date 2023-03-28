
import React from 'react'
import { Data } from '../TblSolicitud'
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { headCellsSolicitud } from '../../../../../core/constants/TblTable/TblHeaders'
import { visuallyHidden } from '@mui/utils'
import { Order } from '../../../../../core/helpers/TblFunctions/TblFunctions'
import { colorBlackSecondary, colorTextBlack } from '../../../../../core/constants/Colores'
export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

export function EnhancedTableHead (props: EnhancedTableProps) {
  // const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
      (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property)
      }

  return (
    <TableHead>
      <TableRow>
        {/** <TableCell padding='checkbox'>
         <Checkbox
              color='primary'
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts'
              }}
            />
        </TableCell> */}
        {headCellsSolicitud.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align === 'center' ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
            sx={{ bgcolor: colorBlackSecondary, color: colorTextBlack }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id
                ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                  )
                : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
