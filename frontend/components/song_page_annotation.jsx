import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft, faPortrait } from '@fortawesome/free-solid-svg-icons';

class SongPageAnnotation extends React.Component {

  constructor(props) {
    super(props);

  }

  renderCurrentAnnotation() {

    if (this.props.activeAnnotationId === -1) {
      return (
        <p className="song-page-about">
          {this.props.song.about}
        </p>
      )
    } 

    let annotationSizzleEnd = (!this.props.annotationSizzle.includes("?")) ? "..." : "";

    return (
      <div className="annotation">

        <div className="song-page-annotation">
          <div className = "sizzle">
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {this.props.annotationSizzle + annotationSizzleEnd}
          </div>
          {this.props.annotations[this.props.activeAnnotationId].body}
          <p className="annotation-author">AuthorPlaceholder</p>

        </div>
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