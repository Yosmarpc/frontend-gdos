import React from 'react'
import AppBarPage from './AppBar/AppBarPage'
import AppDrawer from './AppDrawer/AppDrawer'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { drawerWidth } from '../constants/Constants'

const LayoutPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBarPage handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <AppDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <Box
          component='main'
          sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
          className='pt-2 p-lg-5'
        >
          <Outlet />
        </Box>
      </Box>

    </div>
  )
}

export default LayoutPage
