import React from 'react';

class ShowProfile extends React.Component {
  constructor(props) {
    super(props)

  }


  componentDidMount() {
    this.props.fetchShow(this.props.showId);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.showId !== nextProps.params.showId)
     this.props.fetchShow(nextProps.params.showId);
  }


  render() {
    return (
      <section className="show-profile-container">
        <div className="show-profile-header">
          <div className="s-p-head-items-box">
            <div className="s-p-title-box">
              <div className="play-circle-box">
                <div className="play-circle">

                </div>
              </div>
              <h1>{  }</h1>
              <button className="user-profile-feed-play-all">Play all</button>
              <button>Update cover image</button>
            </div>
            <div className="show-image-box">
              <img  />
            </div>
          </div>
        </div>

        <div className="u-p-head-base">
        </div>

        <div className="u-p-main-container">
        </div>

      </section>
    )
  }
}

export default ShowProfile;
