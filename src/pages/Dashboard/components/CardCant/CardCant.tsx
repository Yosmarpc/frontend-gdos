import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'

const CardCant = () => {
  return (
    <div>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        my={2}
      >

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardContent className='bg-info gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2 fw-semibold'>
                  Total Solicitudes
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  20
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardContent className='bg-warning gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2 fw-semibold'>
                  Solicitudes Pendientes
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  10
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardContent className='bg-success gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2 fw-semibold'>
                  Solicitudes en Procesos
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  6
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardContent className='bg-danger gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2 fw-semibold'>
                  Rechazadas / Pausadas
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  4
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default CardCant
