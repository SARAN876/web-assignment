import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, MenuItem, Select, FormControl, Grid, Typography } from '@mui/material';

const ColumnChart = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const data = {
    option1: [500, 400, 350, 500, 109, 600, 200, 300, 125, 200,300,400],
    option2: [350, 400, 180, 220, 210, 250, 270, 300, 350, 400,350,200],
    option3: [600, 700, 650, 750, 720, 800, 850, 900, 950, 600,700,800]
  };

  const series = [{
    data: data[selectedOption]
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 200,
      toolbar: {
        tools: {
          download: false,
        },
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '30', '31'], 
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Card sx={{ padding: 1, textAlign:'center' }}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">Activity</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="custom-dropdown-label"
              id="custom-dropdown"
              onChange={handleDropdownChange}
              value={selectedOption}
              size="small" 
            >
              <MenuItem value="option1">Week</MenuItem>
              <MenuItem value="option2">Month</MenuItem>
              <MenuItem value="option3">Year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ReactApexChart options={options} series={series} type="bar" height={170} />
    </Card>
  );
};

export default ColumnChart;
