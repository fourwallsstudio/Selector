import React from 'react';

const ShowProfileAside = ({ show }) => {

  return (
    <section className="show-profile-aside-container">
      <div className="s-p-a-favorited">
        <h2>Favorited by</h2>
      </div>
      <div className="s-p-a-listeners">
        <h2>Listeners</h2>
      </div>
      <div className="s-p-a-beatport">
        <h2>More from Beatport</h2>
      </div>
      <div className="s-p-a-footer">

      </div>
    </section>
  )
}

export default ShowProfileAside;
