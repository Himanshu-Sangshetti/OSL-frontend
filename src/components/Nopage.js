import React from 'react';

const Nopage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    color: 'black',
    height: '100vh', // Optional: make the container fill the viewport height
  };

  return (
    <div style={containerStyle}>
      Error - 404 Not found
    </div>
  );
}

export default Nopage;
