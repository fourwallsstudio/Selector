import React from 'react';

const InnerHeader = () => {
  return (
    <div className="inner-header-container">
      <div className="inner-header-width-box">
        <div className="i-h-links" >
          <i className="fa fa-database" aria-hidden="true"></i>
          <p>FEED</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-play-circle-o" aria-hidden="true"></i>
          <p>NEW SHOWS</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-history" aria-hidden="true"></i>
          <p>LISTEN LATER</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <p>FAVORITES</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-fire" aria-hidden="true"></i>
          <p>TRENDING</p>
        </div>

      </div>
    </div>
  );
};

export default InnerHeader;
