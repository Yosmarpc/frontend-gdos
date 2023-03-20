import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { drawerWidth } from '../../constants/Constants'

import { colorBluePrimary } from '../../constants/Colores'
import UserLogin from '../../components/UserLogin/UserLogin'
import LogoGdos from '../../../assets/Img/logo-gdos.png'
import { navConfig } from '../../helpers/Dummy/dum-menu/MenuNav'
import { SignOff } from '../../components/SignOff/SignOff'
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  mobileOpen: any
  handleDrawerToggle: any

}

const AppDrawer = (props: Props) => {
  const { window, mobileOpen, handleDrawerToggle } = props
  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: colorBluePrimary, display: 'flex' }}>
        <div className='rounded mx-auto d-block'>
          <img src={LogoGdos} alt='logo-gdos' width='100' height='60' />
        </div>

      </Toolbar>
      <div className='d-flex justify-content-center'>
        <UserLogin />
      </div>
      <Divider />
      <List>
        {navConfig.map((text, index) => (
          <ListItem key={text.title} disablePadding>
            <ListItemButton component='a' href={text.path}>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <SignOff />
    </div>

  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div>

      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'

      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default AppDrawer
