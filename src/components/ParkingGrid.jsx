import React from 'react';
import ParkingSlot from './ParkingSlot';

const ParkingGrid = ({ allParkings, availableParkings }) => {
  // Combinar todos los parqueos con la información de disponibilidad
  const parkingsWithStatus = allParkings.map(parking => {
    const isAvailable = availableParkings.some(
      available => available.PAR_NUMERO_PARQUEO === parking.numero && 
                  available.PAR_SECCION === parking.seccion
    );
    return {
      ...parking,
      estado: isAvailable ? 1 : 0 // 1 = disponible, 0 = reservado
    };
  });

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
      gap: '10px', 
      padding: '20px' 
    }}>
      {parkingsWithStatus.map((parking) => (
        <ParkingSlot key={`${parking.seccion}-${parking.numero}`} parking={parking} />
      ))}
    </div>
  );
};

export default ParkingGrid;