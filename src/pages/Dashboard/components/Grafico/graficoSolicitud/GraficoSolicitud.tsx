import { Card, CardContent } from '@mui/material'
import React from 'react'
import ApexChart from 'react-apexcharts'
const GraficoSolicitud = () => {
  const dataOptions = {
    donut: {
      /*   series: [dataSeries], */
      options: {
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 480
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ],
        labels: ['Total Solicitudes', 'Rechazadas / Pausadas', 'Solicitud Pendientes'],

        stroke: {
          show: false,
          width: 0
        },
        colors: ['#005792', '#e53935', '#645080', '#000', '#FD5F00', '#005792']
      }
    }
  }

  return (
    <div>
      <Card className='h-100'>
        <CardContent>
          <ApexChart
            type='donut'
            height={280}
            series={[20, 4, 10]}
            options={dataOptions.donut.options}
          />
        </CardContent>
      </Card>

    </div>
  )
}

export default GraficoSolicitud
