/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Spinner = ({ setLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#11151C' }}>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#fff"
          ariaLabel="ball-triangle-loading"
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
