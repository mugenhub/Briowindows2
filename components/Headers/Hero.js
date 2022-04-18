import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default function Hero() {
  return (
    <Box
          sx={{
            bgcolor: 'background.paper',
            height: '50vh',
            pt: 15,
            pb: 6,
            backgroundImage: 'url(https://briowindows.mugenhub.com/wp-content/uploads/2022/02/257108386_626594322039365_8250558679097995941_n.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
          }}
        >
          <Container maxWidth="lg"
          >
            
            <Grid container spacing={2}
            >
                <Grid item xs={12}>
                    <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            
                            color="white"
                            gutterBottom

                            >
                            ABOUT US
                            </Typography>
                          
                </Grid>
                
                <Grid item xs={4}>
                
                </Grid>
                <Grid item xs={8}>
                    
                </Grid>
                </Grid>
                        </Container>
        </Box>
    
        
  )
}
