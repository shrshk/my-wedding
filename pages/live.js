import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Router from 'next/router';
import * as catWaiting from '../animations/46472-lurking-cat.json';
import Lottie from 'react-lottie';
import AddToCalendar from '@culturehq/add-to-calendar';

const waitingOptions = {
  loop: true,
  autoplay: true,
  animationData: catWaiting,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Live() {
  let event = {
    name: "Sanjana Weds Shirish",
    details: "Sanjana and Shirish Live Stream",
    location: "Nizamabad, Telangana",
    startsAt: "2021-12-13T12:00:00+07:00",
    endsAt: "2021-12-13T19:00:00+07:00"
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="left"
          justifyContent="left"
        >
          <Grid item xs={2}>
            <Button variant="text" style={{ color: '#000'}} onClick={() => Router.back()}>
              <ArrowBackIcon style={{ minWidth: '40px', height: '2em'}}/>
            </Button>
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ fontFamily: 'cursive'}} gutterBottom variant="h3" component="div">
              Sanjana & Shirish
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 4 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Typography style={{ fontFamily: 'FreeMono, monospace'}} gutterBottom variant="body2" color="text.secondary">
              Stream starts @ Dec 13th, 2021 | 11:35 AM
            </Typography>
            {/*<Button variant="text" >*/}
            {/*  <AddToCalendar event={event} />*/}
            {/*</Button>*/}
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="left"
          justifyContent="left"
        >
          <Grid item xs={12}>
            <Lottie options={waitingOptions}
                    height={500}
                    width={500}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
