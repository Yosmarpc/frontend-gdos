import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { DeleteIcon, FilterListIcon } from '../../../../../assets/Icons/Icons'
interface EnhancedTableToolbarProps {
    numSelected: number;
  }

export function EnhancedTableToolbar (props: EnhancedTableToolbarProps) {
  const { numSelected } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0
        ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color='inherit'
            variant='subtitle1'
            component='div'
          >
            {numSelected} selected
          </Typography>
          )
        : (
          <Typography
            sx={{ flex: '1 1 100%', fontWeight: 500 }}
            variant='h6'
            id='tableTitle'
            component='div'
          >
            Listado de Solicitud
          </Typography>
          )}
      {numSelected > 0
        ? (
          <Tooltip title='Delete'>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          )
        : (
          <Tooltip title='Filter list'>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          )}
    </Toolbar>
  )
}
