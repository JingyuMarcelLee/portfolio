import React, {useState, useEffect} from 'react';
import { Grow, Button, Box, Typography, CardContent, Card, Container, Grid, TextField } from '@material-ui/core';

export default function Contacts() {
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true))
  return (
    <Grow in={shouldShow}>
      <Container maxwidth="md" id="contact" align="center">
        <Box pt={5} mb={3}>
          <Typography variant="h4">Contact</Typography>
        </Box>
        <Card style={{ maxWidth: 450 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  label="First Name"
                  placeholder="Please enter your first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Last Name"
                  placeholder="Please enter your last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  placeholder="whoami@whoami.com"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Phone Number"
                  placeholder="+x (xxx) xxx-xxxx"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter your message"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Grow>
  );
}