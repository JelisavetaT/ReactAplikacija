import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Navbar.css';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [temp, setTemp] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${user?.city}&units=metric&appid=6c7c6a462f348f58f0cd8bc3b458ce53`
        );
        setTemp(res.data.main.temp);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo' onClick={() => navigate('/')}>
          Booking.com
        </span>
        <div className='navItems'>
          {temp && (
            <span>{user.city + ', ' + user.country + ' ' + temp + '°C'}</span>
          )}
          {user ? (
            <button
              className='navButton'
              onClick={() => navigate('/reservations')}
            >
              My bookings
            </button>
          ) : (
            <button className='navButton' onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
