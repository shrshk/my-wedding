import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';
import EventsGrid from '../components/EventsGrid';


export default function Index() {
  return (
    <Container maxWidth="lg">
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            fontFamily="DejaVu Sans Mono, monospace"
          >
            <Grid item xs={2}>
              <Button variant="text" style={{ color: '#000'}} component={Link} noLinkStyle href="/live">
                <LiveTvIcon style={{ minWidth: '40px', paddingBottom: '5px'}}/>
                <Typography variant="button" display="block" gutterBottom>
                    LIVE
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" style={{ color: '#000'}} component={Link} noLinkStyle href="https://computersandtacos.com">
                <LaunchIcon style={{ minWidth: '40px', paddingBottom: '5px'}}/>
                <Typography variant="button" display="block" gutterBottom>
                  SOCIAL
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <EventsGrid/>
        </Box>
      </Container>
    </Container>
  );
}
