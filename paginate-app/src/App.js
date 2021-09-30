import React from 'react'
import Pages from './Pages'
import Typography from '@mui/material/Typography'
import { useGlobalContext } from './context'
function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main>
        <h1 className='loading'>Loading...</h1>
      </main>
    )
  }
  return (
    <main>
      <Typography variant='h3' mt={3} align='center'>
        Pagination
      </Typography>
      <Pages />
    </main>
  )
}

export default App
