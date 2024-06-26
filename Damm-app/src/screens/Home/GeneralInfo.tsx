import React, { useState } from 'react';
import { Typography, Paper, Grid, ButtonGroup, Button, Box } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import Title from '../../components/Title';

const GeneralInfo = () => {
  const [interval, setInterval] = useState('Diari');

  // Función para cambiar el intervalo
  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  const theme = useTheme();
  const blueColor = theme.palette.primary.main;

  const StyledButton = styled(Button)({
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    border: `1px solid ${blueColor}`,
    color: blueColor,
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: '#fff',
    },
  });

  const data = {
    Diari: {
      tempsRutaPromig: '6h',
      nombreParadesPromig: '3.3',
      quilometresPromig: 740,
      litresEntregats: '8.900',
      litresSobrants: 800,
    },
    Setmanal: {
      tempsRutaPromig: '5h',
      nombreParadesPromig: '3.8',
      quilometresPromig: 920,
      litresEntregats: '460.000',
      litresSobrants: '6.000',
    },
    Anual: {
      tempsRutaPromig: '5.5h',
      nombreParadesPromig: '3.6',
      quilometresPromig: 895,
      litresEntregats: '208.780.000',
      litresSobrants: '52.000',
    },
  };

  return (
    <React.Fragment>
      <Box style={{ width: '100%', display: 'flex', paddingBottom: '8px' }}>
        <StyledButton
          sx={{
            flex: 1,
            minHeight: 0,
            height: '20px',
            textTransform: 'none',
            fontSize: '0.7rem',
            marginRight: '5px',
          }}
          onClick={() => handleIntervalChange('Diari')}
        >
          Diari
        </StyledButton>
        <StyledButton
          sx={{
            flex: 1,
            minHeight: 0,
            height: '20px',
            textTransform: 'none',
            fontSize: '0.7rem',
            marginRight: '5px',
          }}
          onClick={() => handleIntervalChange('Setmanal')}
        >
          Setmanal
        </StyledButton>
        <StyledButton
          sx={{ flex: 1, minHeight: 0, height: '20px', textTransform: 'none', fontSize: '0.7rem' }}
          onClick={() => handleIntervalChange('Anual')}
        >
          Anual
        </StyledButton>
      </Box>
      <Title>Estadístiques Generals ({interval})</Title>
      <div style={{ flexGrow: 1, overflow: 'auto' }}>
        <Typography component="p" sx={{ fontSize: '0.9rem' }}>
          Temps de ruta promig: {data[interval].tempsRutaPromig}
        </Typography>
        <Typography component="p" sx={{ fontSize: '0.9rem' }}>
          Nombre de parades promig: {data[interval].nombreParadesPromig}
        </Typography>
        <Typography component="p" sx={{ fontSize: '0.9rem' }}>
          Kilòmetres promig: {data[interval].quilometresPromig} km
        </Typography>
        <Typography component="p" sx={{ fontSize: '0.9rem' }}>
          Litres entregats: {data[interval].litresEntregats} L
        </Typography>
        <Typography component="p" sx={{ fontSize: '0.9rem' }}>
          Litres sobrants: {data[interval].litresSobrants} L
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default GeneralInfo;
