import React from 'react';
import './styles.css';
import ParkingGrid from '../components/ParkingGrid';
import { useState,useEffect } from 'react';

const Matutina = () => {
    const [parkings, setParkings] = useState([]);
    useEffect(() => {
        const tempParkings = [];

        for (let i = 1; i <= 100; i++) {
            tempParkings.push({ id: i, number: i, isAvailable: true });
        }

        setParkings(tempParkings);
    }, []);

  
    const handleReserve = (parkingId) => {
      // Lógica para reservar el parqueo
      console.log(`Reservar parqueooo ${parkingId}`);
    };
  
    return (
      
      <div>
        <h1>Parqueo hornada Matutina</h1>
        <ParkingGrid parkings={parkings} onReserve={handleReserve} />
        
      </div>
    );
  };
  
  export default Matutina;