import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { colorBlackSecondary, colorBluePrimary } from './core/constants/Colores'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
const theme = createTheme({
  palette: {
    primary: {
      main: colorBluePrimary
    },
    secondary: {
      main: colorBlackSecondary
    }
  },
  typography: {
    fontSize: 13,
    fontFamily: [
      'Roboto',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={4} autoHideDuration={5000}>

          <App />

        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
