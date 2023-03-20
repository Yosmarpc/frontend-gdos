
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ArrowsPrevious } from '../ArrowsPrevious/ArrowsPrevious'
import { useDetectWidth } from '../../constants/UseResponsive'

const SectionHeader = (props: any) => {
  const { title } = props
  const [isWidth] = React.useState(useDetectWidth('(min-width:500px)'))

  return (
    <div className='my-5'>

      <Grid
        container
        direction='row'
        xs={12}
        sm={12}
        justifyContent='space-between'
        alignItems='flex-start'
        className='shadow p-0 bg-body rounded px-3 '
      >
        <div className='my-3'>
          <ArrowsPrevious />
        </div>
        <div className='my-3'>
          {title
            ? (
              <Grid item xs={12}>
                <Typography variant='h6' color='#000' className={isWidth ? 'fw-bold text-start' : 'fw-bold text-end'}>
                  {title}
                </Typography>
              </Grid>
              )
            : null}
        </div>

        {props.children}
      </Grid>

    </div>

  )
}

export default SectionHeader
