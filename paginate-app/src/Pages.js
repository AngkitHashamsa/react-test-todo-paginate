import React from 'react'
import { useGlobalContext } from './context'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
const Pages = () => {
  const { user, page, totalPage, handleNextPage, handlePreviousPage } =
    useGlobalContext()

  return (
    <Container className='container' maxWidth='md'>
      <Grid container spacing={3}>
        {user &&
          user.map((item) => {
            const { id, email, first_name, last_name, avatar } = item

            return (
              <Grid item xs={12} md={6} key={id}>
                <Card>
                  <ImageCon>
                    <Image src={avatar} alt=' first_name' />
                  </ImageCon>
                  <CardContent>
                    <Typography align='center' variant='h5'>
                      {first_name}
                      {last_name}
                    </Typography>
                    <Typography mt={2} align='center' variant='body2'>
                      {email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
      </Grid>
      {/* buttons */}
      <PageButtons>
        <ButtonContainer className='btn-container'>
          {page > 1 ? (
            <Button variant='contained' onClick={handlePreviousPage}>
              prev
            </Button>
          ) : null}
          <PageNumber>
            {page} / {totalPage}
          </PageNumber>
          {page < totalPage ? (
            <Button variant='contained' onClick={handleNextPage}>
              next
            </Button>
          ) : null}
        </ButtonContainer>
      </PageButtons>
    </Container>
  )
}

// styles
const ImageCon = styled('div')(({ theme }) => ({
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem auto',
  height: '100px',
  width: '100px',
}))
const Image = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  objectFit: 'cover',
}))
const PageButtons = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
}))
const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
}))
const PageNumber = styled('span')(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export default Pages
