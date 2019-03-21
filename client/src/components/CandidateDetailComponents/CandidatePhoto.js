import React from 'react';

const Photo = (props) => {
  const photoStyle = {
    display: "inline",
    verticalAlign: "top",
    height: props.maxHeight || '600px',
    maxWidth: props.maxWidth || '500px'
  }
  return( 
    <img style={photoStyle} src={props.image} alt=''></img>
  )
};

export default Photo;