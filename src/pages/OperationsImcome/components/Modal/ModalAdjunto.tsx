import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import FormAdjunto from '../../FormAdjunto'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const ModalAdjunto = (props: any) => {
  return (
    <div>
      {' '}
      <Dialog
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
        // onClose={props.handleOpenModal}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>Adjunto Documento</DialogTitle>
        <DialogContent>
          <Box my={3}>
            <FormAdjunto />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleOpenModal}>Cancelar</Button>
          <Button>Agregar Documento</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalAdjunto
