import React from 'react';

const QueueItem = (props) => {
  const show = props.queueItem.show;
  return (
    <li className="rest-queue-box">
      <div className="rest-queue-image-box">
        <img src={ show.image_url } />
      </div>

      <div className="rest-queue-play-detail">
        <h2>{ show.title }</h2>
        <p>by</p>
        <h4>{ show.author_username }</h4>
      </div>
    </li>
  )
};

export default QueueItem;
