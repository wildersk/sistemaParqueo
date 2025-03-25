import React, { useState, useEffect } from 'react';
import ParkingGrid from '../components/ParkingGrid';

const Matutina = () => {
  const [availableParkings, setAvailableParkings] = useState([]);
  
  // Generar los 100 parqueos iniciales
  const generateAllParkings = () => {
    const allParkings = [];
    
    // 70 parqueos para estudiantes (sección E)
    for (let i = 1; i <= 70; i++) {
      allParkings.push({
        numero: i,
        seccion: 'E',
        estado: 1 // Inicialmente disponibles
      });
    }
    
    // 20 parqueos para administrativos (sección A)
    for (let i = 71; i <= 90; i++) {
      allParkings.push({
        numero: i,
        seccion: 'A',
        estado: 1
      });
    }
    
    // 10 parqueos para visitas (sección V)
    for (let i = 91; i <= 100; i++) {
      allParkings.push({
        numero: i,
        seccion: 'V',
        estado: 1
      });
    }
    
    return allParkings;
  };

  const [allParkings] = useState(generateAllParkings());

  // Obtener parqueos disponibles de la API
  const fetchAvailableParkings = async () => {
    try {
      const endpoints = [
        '/api/disponibilidad_parqueo?JOR_TIPO=MATUTINA&SECCION=E',
        '/api/disponibilidad_parqueo?JOR_TIPO=MATUTINA&SECCION=A',
        '/api/disponibilidad_parqueo?JOR_TIPO=MATUTINA&SECCION=V'
      ];

      const responses = await Promise.all(endpoints.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      
      setAvailableParkings(data.flat());
    } catch (error) {
      console.error('Error fetching available parkings:', error);
    }
  };

  useEffect(() => {
    fetchAvailableParkings();
    // Opcional: Refrescar cada X tiempo
    const interval = setInterval(fetchAvailableParkings, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Estado de los Parqueos</h1>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'green', marginRight: '10px' }}></div>
        <span>Disponible</span>
        <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'red', margin: '0 10px 0 20px' }}></div>
        <span>Reservado</span>
      </div>
      
      <ParkingGrid 
        allParkings={allParkings} 
        availableParkings={availableParkings} 
      />
    </div>
  );
};

export default Matutina;