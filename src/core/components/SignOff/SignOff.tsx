import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { CloseIcon } from '../../../assets/Icons/Icons'
import { colorBluePrimary, colorTextWhite } from '../../constants/Colores'
import ModalConfirmations from './components/Modal/ModalConfirmations'

export const SignOff = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <ModalConfirmations openModal={openModal} handleOpenModal={handleOpenModal} />
      <List
        className='position-absolute bottom-0 start-0 w-100'
        sx={{ backgroundColor: colorBluePrimary, color: colorTextWhite }}
      >
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleOpenModal()}>
            <ListItemIcon sx={{ color: colorTextWhite }}>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary='Cerrar Sesión' />
          </ListItemButton>
        </ListItem>

      </List>
    </div>
  )
}
