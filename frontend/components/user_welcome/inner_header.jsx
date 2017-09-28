import React from 'react';

const InnerHeader = ({ fetchAllShows, updateFilter }) => {

  const handleFilter = (filter) => {
    updateFilter(filter);
    fetchAllShows(filter);
  }

  return (
    <div className="inner-header-container">
      <div className="inner-header-width-box">
        <div className="i-h-links"
          onClick={ () => handleFilter('main_feed') }>
          <i className="fa fa-database fa-lg" aria-hidden="true"></i>
          <p>FEED</p>
        </div>
        <div className="i-h-links"
          onClick={ () => handleFilter('most_recent') }>
          <i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i>
          <p>NEW SHOWS</p>
        </div>
        <div className="i-h-links"
              onClick={ () => handleFilter('trending') }>
          <i className="fa fa-fire fa-lg" aria-hidden="true"></i>
          <p>TRENDING</p>
        </div>

      </div>
    </div>
  );
};

export default InnerHeader;

/*

<div className="i-h-links">
  <i className="fa fa-history fa-lg" aria-hidden="true"></i>
  <p>LISTEN LATER</p>
</div>
<div className="i-h-links">
  <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
  <p>FAVORITES</p>
</div>

*/
