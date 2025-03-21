import React from 'react';
import ParkingSlot from './ParkingSlot';

const ParkingGrid = ({ parkings, onReserve }) => {
  return (
    
    <div className="parking-grid">
      {parkings.map((parking) => (
        <ParkingSlot key={parking.id} parking={parking} onReserve={onReserve} />
      ))}
    </div>
  );
};

export default ParkingGrid;