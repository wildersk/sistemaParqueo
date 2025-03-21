import React from 'react';

const ParkingSlot = ({ parking, onReserve }) => {
  return (
    <div className="parking-slot">
      <h3>Parqueo {parking.number}</h3>
      <p>Estado: {parking.isAvailable ? 'Disponible' : 'Reservado'} Seccion A</p>
      {parking.isAvailable && (
        <button onClick={() => onReserve(parking.id)}>Reservar</button>
      )}
    </div>
  );
};

export default ParkingSlot;