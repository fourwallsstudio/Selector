import React from 'react';

const Notice = (props) => {
  return (
    <div className="notice">
      <h4>{ props.message }</h4>
    </div>
  )
}

export default Notice;
