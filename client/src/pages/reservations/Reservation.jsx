import React, { useContext, useEffect } from 'react';

import './Reservation.css';
import Header from '../../components/header/Header';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';
import ReservationItem from '../../components/reservationItem/ReservationItem';

const Reservation = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/reservations/${user._id}`
  );

  return (
    <div className='reservationsContainer'>
      <Header type='list' />
      <div className='reservationsList'>
        {loading
          ? 'Loading...'
          : data.map((item) => <ReservationItem item={item} />)}
      </div>
    </div>
  );
};

export default Reservation;
