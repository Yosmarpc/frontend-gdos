import { Box, Dialog, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from 'notistack'
import React from 'react'
import { Button } from 'react-bootstrap'
import { MSG_EXIT_CONFIRMATION } from '../../../../constants/Setting'
import { useAppDispatch } from '../../../../../store/Store'
import { resetUser } from '../../../../../store/user'
const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const ModalConfirmations = (props: any) => {
  const dispatch = useAppDispatch()

  const singOff = () => {
    dispatch(resetUser())
  }
  return (
    <div>
      <Dialog
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
    // onClose={props.handleOpenModal}
        aria-describedby='alert-dialog-slide-description'
      >

        <DialogContent>
          <Box my={3}>
            {MSG_EXIT_CONFIRMATION}
            <div className='px-4 my-3 d-flex justify-content-around'>
              <Button
                variant='btn btn-outline-primary btn-sm'
                onClick={() => singOff()}
              >Si
              </Button>
              <Button variant='btn btn-outline-danger btn-sm' onClick={() => props.handleOpenModal()}>Cancelar</Button>
            </div>
          </Box>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default ModalConfirmations
