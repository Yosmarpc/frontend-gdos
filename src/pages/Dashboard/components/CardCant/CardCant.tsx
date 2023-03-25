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
        p={3}
        spacing={1}

      >
        <div className='carrousel-mobil' />
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
          <Card>
            <CardContent className='bg-info gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2'>
                  Total Solicitudes
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  20
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
          <Card>
            <CardContent className='bg-warning gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2'>
                  Solicitudes Pendientes
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  10
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
          <Card>
            <CardContent className='bg-success gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2'>
                  Solicitudes en Procesos
                </div>
                <div className='col-6 text-end fs-3 text-white my-3'>
                  6
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
          <Card>
            <CardContent className='bg-danger gy-2'>
              <div className='row'>
                <div className='col-6 text-white my-2'>
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
