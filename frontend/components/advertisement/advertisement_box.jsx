import React from 'react';

const AdvertisementBox = (props) => {
  return (
    <div className="ad-box">
      <div><p>advertisement</p></div>
      <img src={ props.ad } alt="cjd"></img>
    </div>
  )
}

export default AdvertisementBox;
