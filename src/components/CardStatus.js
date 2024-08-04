import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';

const CardContentFragment = ({ icon, title, value, percentage, iconColor, percentageColor, iconBgColor }) => (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          width: 40,
          height: 40,
          backgroundColor: iconBgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
        }}
      >
        <Icon icon={icon} width="1.2em" height="1.5em" style={{ color: iconColor }} />
      </Box>
      <Typography variant="body1" marginTop={1}>
        {title}
      </Typography>
    </CardContent>
    <Grid container direction="row" justifyContent="space-between" alignItems="center" paddingX={1}>
      <Grid item>
        <Typography variant="h4">
          {value}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <Icon 
              icon={percentageColor === "red" ? "teenyicons:down-solid" : "teenyicons:up-solid"} 
              width="1em" 
              height="1em" 
              style={{ color: percentageColor }} 
            />
          </Grid>
          <Grid item>
            <h5>{percentage}%</h5>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default function OutlinedCard({ icon, title, value, percentage, iconColor = 'white', percentageColor = 'green', iconBgColor = 'warning.main' }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <Card variant="outlined">
        <CardContentFragment 
          icon={icon} 
          title={title} 
          value={value} 
          percentage={percentage} 
          iconColor={iconColor} 
          percentageColor={percentageColor} 
          iconBgColor={iconBgColor} 
        />
      </Card>
    </Box>
  );
}
