import React from 'react';

class SongPageAnnotation extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

      return (
      
      <div>
        <p className="song-page-annotation-title">ABOUT "{this.props.song.title.toUpperCase()}"</p>
        <p className="song-page-annotation-about">{this.props.song.about}</p>
      </div>
      )
    
    }
  }

export default SongPageAnnotation;