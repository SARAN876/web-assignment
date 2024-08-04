import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Typography, useMediaQuery } from '@mui/material';

const ApexChart = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [options, setOptions] = useState({
    chart: {
      height: 200,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '55%',
        },
        dataLabels: {
          name: {
            offsetY: 20,
            style: {
              fontSize: '5px',
            },
          },
          value: {
            offsetY: -20,
            style: {
              fontSize: '5px',
            },
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    labels: ['Goal'],
  });

  const [series, setSeries] = useState([70]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        height: 150,
      },
      plotOptions: {
        radialBar: {
          ...prevOptions.plotOptions.radialBar,
          dataLabels: {
            ...prevOptions.plotOptions.radialBar.dataLabels,
            name: {
              ...prevOptions.plotOptions.radialBar.dataLabels.name,
              style: {
                ...prevOptions.plotOptions.radialBar.dataLabels.name.style,
                fontSize: isMobile ? '10px' : '14px',
              },
            },
            value: {
              ...prevOptions.plotOptions.radialBar.dataLabels.value,
              style: {
                ...prevOptions.plotOptions.radialBar.dataLabels.value.style,
                fontSize: isMobile ? '10px' : '14px',
              },
            },
          },
        },
      },
    }));
  }, [isMobile]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={options.chart.height} />
        <Typography variant='subtitle2'>*The values here has been rounded off</Typography>
      </div>
    </div>
  );
};

export default ApexChart;
