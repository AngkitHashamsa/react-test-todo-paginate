import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { AppProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <CssBaseline />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
