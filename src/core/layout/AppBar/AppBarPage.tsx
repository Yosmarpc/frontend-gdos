import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ArrowsLeft, MenuIcon } from '../../../assets/Icons/Icons'
import { drawerWidth } from '../../constants/Constants'
import { TITLE_PROJECT } from '../../constants/Setting'
import { colorBlueThree, colorTextWhite } from '../../constants/Colores'

const AppBarPage = (props: any) => {
  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: colorBlueThree
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: colorTextWhite }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            <div className='text-white'><ArrowsLeft onClick={props.handleDrawerToggle} sx={{ cursor: 'pointer', mr: 2 }} /> {TITLE_PROJECT}</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarPage
