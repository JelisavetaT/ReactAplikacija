import React from 'react';

import './FeaturedProperties.css';
import useFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8800/api/hotels?featured=true&limit=3'
  );

  return (
    <div className='fp'>
      {loading ? (
        'Loading...'
      ) : (
        <>
          {data.map((item) => (
            <div className='fpItem' key={item._id}>
              <img
                src={
                  item.photos[0]
                    ? item.photos[0]
                    : 'https://play-lh.googleusercontent.com/eJuvWSnbPwEWAQCYwl8i9nPJXRzTv94JSYGGrKIu0qeuG_5wgYtb982-2F_jOGtIytY'
                }
                alt=''
                className='fpImg'
              />
              <span className='fpName'>{item.name}</span>
              <span className='fpCity'>{item.city}</span>
              <span className='fpPrice'>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='fpRating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
