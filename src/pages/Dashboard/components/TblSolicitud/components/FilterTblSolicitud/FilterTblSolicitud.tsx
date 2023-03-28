import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { FilterListIcon } from '../../../../../../assets/Icons/Icons'

const FilterTblSolicitud = () => {
  return (
    <div>
      <Tooltip title='Filter list'>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default FilterTblSolicitud
