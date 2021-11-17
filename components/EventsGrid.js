import * as React from 'react';
import { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as textAnimation from '../animations/text-animation.json';
import * as coupleRiding from '../animations/couple-riding-vespa.json';
import * as partyDance from '../animations/party-dance.json';
import * as weddingRings from '../animations/wedding-rings.json';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import Lottie from 'react-lottie';
import Link from '../src/Link';

const nameOptions = {
  loop: true,
  autoplay: true,
  animationData: textAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const engagementOptions = {
  loop: true,
  autoplay: true,
  animationData: weddingRings,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const weddingOptions = {
  loop: true,
  autoplay: true,
  animationData: coupleRiding,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const sangeethOptions = {
  loop: true,
  autoplay: true,
  animationData: partyDance,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


export default function EventsGrid() {

  const [selected, setSelected] = useState(0);

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'cursive'}} gutterBottom variant="h3" component="div">
              Sanjana & Shirish
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 8 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="left"
          justifyContent="left"
        >
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}
                  raised={selected===1}
                  onMouseOver={() => {
                    setSelected(1);
                  }}
                  onMouseOut={() => {
                    setSelected(0);
                  }}
            >
              <CardMedia>
                <Lottie options={engagementOptions}
                        height={100}
                        width={100}
                />
              </CardMedia>
              <CardContent>
                <Typography style={{ fontFamily: 'Marker Felt, fantasy'}} gutterBottom variant="h5" component="div">
                  Engagement
                </Typography>
                <Typography style={{ fontFamily: 'FreeMono, monospace'}} gutterBottom variant="body2" color="text.secondary">
                  Nov 29th, 2021 | 7:00 PM
                </Typography>
                <Typography component={Link} href="https://goo.gl/maps/P6rWBmVA6UvfpmuU6" style={{ fontFamily: 'FreeMono, monospace', textDecoration: 'none' }} variant="button" display="block" color="text.secondary">
                  @ JRC Convention <LaunchIcon style={{width: '15px', height: '15px'}}/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}
                  raised={selected===2}
                  onMouseOver={() => setSelected(2)}
                  onMouseOut={() => setSelected(0)}
            >
              <CardMedia>
                <Lottie options={weddingOptions}
                        height={100}
                        width={100}
                />
              </CardMedia>
              <CardContent>
                <Typography style={{ fontFamily: 'Marker Felt, fantasy'}} gutterBottom variant="h5" component="div">
                  Wedding
                </Typography>
                <Typography style={{ fontFamily: 'FreeMono, monospace'}} gutterBottom variant="body2" color="text.secondary">
                  Dec 13th, 2021 | 11:35 AM
                </Typography>
                <Typography component={Link} href="https://goo.gl/maps/L9B7BNw2az8gTXXFA" style={{ fontFamily: 'FreeMono, monospace', textDecoration: 'none' }} variant="button" display="block" color="text.secondary">
                  @ Sri Rama Gardens <LaunchIcon style={{width: '15px', height: '15px'}}/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}
                  raised={selected===3}
                  onMouseOver={() => setSelected(3)}
                  onMouseOut={() => setSelected(0)}
            >
              <CardMedia>
                <Lottie options={sangeethOptions}
                        height={100}
                        width={100}
                />
              </CardMedia>
              <CardContent>
                <Typography style={{ fontFamily: 'Marker Felt, fantasy'}} gutterBottom variant="h5" component="div">
                  Sangeeth
                </Typography>
                <Typography style={{ fontFamily: 'FreeMono, monospace'}} gutterBottom variant="body2" color="text.secondary">
                  Dec 5th, 2021 | 7:00 PM
                </Typography>
                <Typography component={Link} href="https://goo.gl/maps/Ey2cHZ6rkBSRPcSt7" style={{ fontFamily: 'FreeMono, monospace', textDecoration: 'none' }} variant="button" display="block" color="text.secondary">
                  @ Golden Orchard <LaunchIcon style={{width: '15px', height: '15px'}}/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}