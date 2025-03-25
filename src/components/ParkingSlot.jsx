import React from 'react';

const ParkingSlot = ({ parking }) => {
  const parkingStyle = {
    backgroundColor: parking.estado === 1 ? 'green' : 'red',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    textAlign: 'center',
    minWidth: '120px'
  };

  return (
    <div style={parkingStyle}>
      <h3>Parqueo {parking.numero}</h3>
      <p>Sección: {parking.seccion}</p>
      <p>Estado: {parking.estado === 1 ? 'Disponible' : 'Reservado'}</p>
    </div>
  );
};

export default ParkingSlot;