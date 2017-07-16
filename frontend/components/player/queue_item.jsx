import React from 'react';

const QueueItem = (props) => {

  const handlePlayClick = (e) => {
    e.preventDefault();
    props.stopPreview(props.preview.howlPreview);

    if (props.player.player[0]._sounds[0].show_id !== props.show.id) {


      const queueItem = {
        show_id: props.show.id,
        user_id: props.currentUser,
        seek: 0
      }
      props.createQueueItem(queueItem);

    } else {

      let current = props.player.player[0]._sounds[0];

      if (current._paused) {
        props.player.player[0].play();
      } else {
        props.player.player[0].pause();
      }
    }
  }

  const show = props.show;
  let firstPlayDisplay = (
    <svg viewBox="0 0 21 24">
      <path d="M0,21.6V2.4c0-2.2,1.7-3,3.9-1.9l15.5,9.6c2.1,1.1,2.1,2.8,0,3.9L3.9,23.5C1.8,24.6,0,23.7,0,21.6z"/>
    </svg>
  );

  return (
    <li className="rest-queue-box" >
      <div className="rest-queue-image-box">
        <img src={ show.image_url } />
      </div>
      <div className="first-queue-play-button"
        onClick={ handlePlayClick } >

        { firstPlayDisplay }

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
