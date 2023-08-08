import React from 'react';

const Progressbar = (props) => {
    const { bgcolor, completed,name } = props;

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
    
    }
  const text ={
    name:name,
  }
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      
      <div>
        <h1 className='my-4  font-bold '>{name}</h1>
        <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </div>
    );
  };
  

export default Progressbar;