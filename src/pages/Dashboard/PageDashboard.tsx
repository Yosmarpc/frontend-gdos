import { Box, Grid } from '@mui/material'
import React from 'react'
import CardCant from './components/CardCant/CardCant'

const PageDashboard = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardCant />
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default PageDashboard
