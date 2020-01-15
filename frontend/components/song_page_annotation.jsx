import React from 'react';

class SongPageAnnotation extends React.Component {

  constructor(props) {
    super(props);

  }


  renderCurrentAnnotation() {

    if (this.props.activeAnnotationId === -1) {
      return (
        <p className="song-page-annotation-about">
          {this.props.song.about}
        </p>
      )
    } 
    return (
      <div className="annotation">
        <p className="song-page-annotation-about">
          {this.props.annotations[this.props.activeAnnotationId].body}
        </p>
      </div>
    )

  }

  render() {

      if(this.props.annotations === undefined) {
        return null;
      }

      return (
      
      <div className="song-page-annotation-wrapper">

        <p className="song-page-annotation-title">ABOUT "{this.props.song.title.toUpperCase()}"</p>
        
        {this.renderCurrentAnnotation()}

      </div>
      )
    
    }
  }

export default SongPageAnnotation;