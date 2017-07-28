import React from 'react';

const MustBeLoggedIn = type => {
  let action;

  switch (type) {

    case "upload":
      action = " TO UPLOAD";
    break;

    case "edit":
      action = " TO EDIT";
    break;

    default:
      action = "";
  }

  return (
    <section className="home-container">
      <div className="home-mask"></div>
      <div className="home-img-box"></div>
      <div className="must-be-logged-in">
        <h1>MUST BE LOGGED IN{ action }</h1>
      </div>
    </section>
  )
};

export default MustBeLoggedIn;
