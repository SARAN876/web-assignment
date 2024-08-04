import React from 'react';
import { Container, CssBaseline, Grid, Typography, Card, Box, CardContent } from '@mui/material';
import OutlinedCard from '../components/CardStatus';
import ColoumnChart from './Coloumnchart';
import { Icon } from '@iconify/react';
import Tables from '../components/table';
import CustomerFeedback from './Feedback';
import ApexChart from '../pages/Piechart';

function DashBoard() {

    const goals = [
        { name: 'Goals', icon: 'mdi:bullseye-arrow', bgColor: '#3f51b5' },
        { name: 'Popular Dishes', icon: 'mdi:food', bgColor: '#f50057' },
        { name: 'Menu', icon: 'mdi:book-open-page-variant', bgColor: '#4caf50' }
      ];

  const cardData = [
    {
      icon: 'cil:basket',
      title: 'Total Orders',
      value: 75,
      percentage: 3,
      iconColor: 'white',
      percentageColor: 'green',
      iconBgColor: 'blue'
    },
    {
      icon: 'maki:shop',
      title: 'Total Delivered',
      value: 70,
      percentage: 5,
      iconColor: '#06914a',
      percentageColor: 'red',
      iconBgColor: '#5ae89f'
    },
    {
      icon: 'tabler:shopping-cart-x',
      title: 'Total Cancelled',
      value: 5,
      percentage: 15,
      iconColor: '#bd2020',
      percentageColor: 'blue',
      iconBgColor: '#ed6666'
    },
    {
      icon: 'ant-design:dollar-circle-outlined',
      title: 'Total Revenue',
      value: 10,
      percentage: -2,
      iconColor: '#7d0645',
      percentageColor: 'red',
      iconBgColor: '#cc629a'
    }
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: '1.25rem', paddingTop: '1.25rem' }}>
        <CssBaseline />
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {cardData.map((data, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <OutlinedCard
                      icon={data.icon}
                      title={data.title}
                      value={data.value}
                      percentage={data.percentage}
                      iconColor={data.iconColor}
                      percentageColor={data.percentageColor}
                      iconBgColor={data.iconBgColor}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', padding: '1rem' }}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                  <Typography variant='caption'>
                    Net Profit
                  </Typography>
                  <Typography gutterBottom variant="h4" component="div" sx={{ padding: '1rem' }}>
                    $6783.93
                  </Typography>
                  <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    <Grid item>
                      <Icon icon="teenyicons:up-solid" width="1em" height="1em" style={{ color: 'green' }} />
                    </Grid>
                    <Grid item>
                      <Typography>3%</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                  <ApexChart />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ColoumnChart />
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={4} padding={1}>
                  {goals.map((goal, index) => (
                    <Grid item key={index}>
                      <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item xs>
                          <Grid container direction="row" alignItems="center">
                          <Box
                              sx={{
                                bgcolor: goal.bgColor,
                                color: 'white',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Icon icon={goal.icon} width="1.5em" height="1.5em" />
                            </Box>
                            <Typography variant="subtitle2" sx={{ marginLeft: 1 }}>{goal.name}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Icon icon="icon-park-outline:right-c" width="1.2em" height="1.2em" style={{ color: 'black' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%' }}>
              <Tables />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CustomerFeedback />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashBoard;
