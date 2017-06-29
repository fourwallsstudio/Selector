import React from 'react';

const InnerHeader = ({ fetchAllShows, updateFilter }) => {

  const handleTrending = () => {
    updateFilter("trending");
    fetchAllShows("trending");
  }

  const handleFeed = () => {
    updateFilter("most_recent");
    fetchAllShows("most_recent");
  }

  return (
    <div className="inner-header-container">
      <div className="inner-header-width-box">
        <div className="i-h-links"
          onClick={ handleFeed.bind(this) }>
          <i className="fa fa-database fa-lg" aria-hidden="true"></i>
          <p>FEED</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i>
          <p>NEW SHOWS</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-history fa-lg" aria-hidden="true"></i>
          <p>LISTEN LATER</p>
        </div>
        <div className="i-h-links">
          <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
          <p>FAVORITES</p>
        </div>
        <div className="i-h-links"
              onClick={ handleTrending.bind(this) }>
          <i className="fa fa-fire fa-lg" aria-hidden="true"></i>
          <p>TRENDING</p>
        </div>

      </div>
    </div>
  );
};

export default InnerHeader;
