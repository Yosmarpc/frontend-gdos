import { Box, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import CardCant from './components/CardCant/CardCant'
import TblSolicitud from './components/TblSolicitud/TblSolicitud'
import BtnDescargarExcel from '../../core/components/BtnDescargarExcel/BtnDescargarExcel'
import GraficoSolicitud from './components/Grafico/graficoSolicitud/GraficoSolicitud'
import FilterTblSolicitud from './components/TblSolicitud/components/FilterTblSolicitud/FilterTblSolicitud'
import { useDetectWidth } from '../../core/constants/UseResponsive'

const PageDashboard = () => {
  const [isWidth] = React.useState(useDetectWidth('(min-width:500px)'))
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} my={4}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className='h-100'>
              <CardContent>
                <CardCant />
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <GraficoSolicitud />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <FilterTblSolicitud />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'right' }}><BtnDescargarExcel /></Grid>
          {isWidth
            ? (
              <Grid item xs={12}>
                <TblSolicitud />
              </Grid>
              )
            : ''}
        </Grid>
      </Box>

    </div>
  )
}

export default PageDashboard
