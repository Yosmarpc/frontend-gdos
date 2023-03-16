import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from '@mui/material'
import React, { useState } from 'react'
import TblListDocument from './components/TblListDocument'
import ModalAdjunto from './components/Modal/ModalAdjunto'
import { DataForm } from './models/IForm'
import SectionHeader from '../../core/components/SectionsHeaders/SectionHeader'
import TitleHeader from '../../core/components/TitleHeader/TitleHeader'
import PXRut from '../../core/components/InputRut/PXRut'
import { SIZE_INPUT } from '../../core/constants/Setting'
import { AddCircleIcon } from '../../assets/Icons/Icons'
import { Button } from 'react-bootstrap'

const FormIngresoOperacion = (props: any) => {
  const [dataForm, setForm] = useState<DataForm>({
    type_operations: 0,
    type_persona: 0,
    rut: '',
    name_client: '',
    email_client: '',
    phone_client: ''
  })

  const [openModal, setOpenModal] = useState<Boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      {/** Modal Adjunto */}
      <ModalAdjunto openModal={openModal} handleOpenModal={handleOpenModal} />

      <SectionHeader title='Ingreso Operación' />
      <Box my={3}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{ borderRadius: '15px' }} className='shadow p-3 mb-5 bg-body-tertiary rounded h-100'>
              <TitleHeader title='Cliente' />

              <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12} sm={12} md={8} lg={4} xl={4}>
                  <PXRut />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Button variant='primary'>
                    Buscar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                  <TextField
                    type='text'
                    label='Razón Social'
                    value={dataForm.name_client}
                    onChange={(e) => {
                      setForm({ ...dataForm, name_client: e.target.value })
                    }}
                    fullWidth
                    size={SIZE_INPUT}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <TextField
                    type='mail'
                    label='Email'
                    value={dataForm.email_client}
                    onChange={(e) => {
                      setForm({ ...dataForm, email_client: e.target.value })
                    }}
                    fullWidth
                    size={SIZE_INPUT}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                  <TextField
                    type='tel'
                    label='Teléfono'
                    value={dataForm.phone_client}
                    onChange={(e) => {
                      setForm({ ...dataForm, phone_client: e.target.value })
                    }}
                    fullWidth
                    size={SIZE_INPUT}
                    margin='dense'
                  />
                </Grid>
              </Grid>

              <Box my={3}>
                <Grid container spacing={{ xs: 2, md: 2 }}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormControl fullWidth size={SIZE_INPUT}>
                      <InputLabel id='demo-select-small'>Tipo de Operación</InputLabel>
                      <Select
                        labelId='demo-select-small'
                        id='demo-select-small'
                        value={dataForm.type_operations}
                        label='Tipo de Operación'
                        onChange={(e) => {
                          setForm({ ...dataForm, type_operations: e.target.value })
                        }}
                        fullWidth
                      >
                        <MenuItem value={0}>Seleccione...</MenuItem>
                        <MenuItem value={10}>Inmobiliaría</MenuItem>
                        <MenuItem value={20}>Persona</MenuItem>
                        <MenuItem value={30}>Otra</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormControl fullWidth size={SIZE_INPUT}>
                      <InputLabel id='demo-select-small'>Tipo Persona</InputLabel>
                      <Select
                        labelId='demo-select-small'
                        id='demo-select-small'
                        value={dataForm.type_persona}
                        label='Tipo Persona'
                        onChange={(e) => {
                          setForm({ ...dataForm, type_persona: e.target.value })
                        }}
                        fullWidth
                      >
                        <MenuItem value={0}>Seleccione...</MenuItem>
                        <MenuItem value={10}>Natural</MenuItem>
                        <MenuItem value={20}>Juridica</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Box my={2}>
                    <Divider />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div>

                    <TitleHeader title='Adjunto de documentos' />

                    <div className='text-end'>
                      <Button
                        variant='primary' onClick={handleOpenModal}
                      >
                        Adjuntar nuevo documento <AddCircleIcon />
                      </Button>
                    </div>
                    <div className='my-3' />
                    <TblListDocument />

                  </div>
                </Grid>

              </Box>

            </div>
          </Grid>

        </Grid>

      </Box>

      <Box my={2}>
        <Box my={4} sx={{ display: 'flex', alignContent: 'right', justifyContent: 'right', alignItems: 'right' }}>
          <Button
            variant='primary'
          >
            Crear Solicitud
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default FormIngresoOperacion
