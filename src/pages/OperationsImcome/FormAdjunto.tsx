import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

type FormAdjtItem = {
  type_documents: string | number;
  file_name: string;
};
const FormAdjunto = () => {
  const [formAdjt, setFormAdjt] = useState<FormAdjtItem>({
    type_documents: 0,
    file_name: ''
  })
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-select-small'>Tipo Documento</InputLabel>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={formAdjt.type_documents}
              label='Tipo Documento'
              onChange={(e) => {
                setFormAdjt({ ...formAdjt, type_documents: e.target.value })
              }}
              fullWidth
            >
              <MenuItem value={0}>Seleccione...</MenuItem>
              <MenuItem value={10}>Ficha de riesgo cliente</MenuItem>
              <MenuItem value={20}>Solicitud de crédito firmada</MenuItem>
              <MenuItem value={21}>Aprobación de crédito</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box my={2}>
            <Button variant='outlined' color='success'>
              <label className='custom-file-label' htmlFor='customFile' color='info'>
                Archivo Carpeta Tributaria (.pdf. jpg, png)
              </label>
              <br />
              <TextField
                fullWidth
                type='file'
                name='filetobase64'
                className='custom-file-input'
                id='customFile'
                // onChange={onFileChange}
                variant='standard'
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default FormAdjunto
