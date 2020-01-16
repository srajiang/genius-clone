import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import SongPageAnnotationDetail from './song_page_annotation_detail';

class SongPageAnnotation extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCurrentAnnotation() {
    
    if (this.props.activeAnnotationId === -1 && this.props.annotationFormActive === false) {  /* no active annotation or annotationForm*/
      return (
        <p className="song-page-about">
          {this.props.song.about}
        </p>
      )
    }

    return (  /* render form or annotation */

      // <div className="annotation">

      //   <div className="song-page-annotation">
      //     <div className="header"><p>GENIUS ANNOTATION</p></div>

      //     <div className = "sizzle">

      //       <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
      //       {this.props.annotationSizzle + annotationSizzleEnd}

      //     </div>

      //     {this.props.annotations[this.props.activeAnnotationId].body}

      //     <p className="annotation-author">AuthorPlaceholder</p>

      //   </div>
      // </div>

      <SongPageAnnotationDetail

        annotations={this.props.annotations}
        activeAnnotationId={this.props.activeAnnotationId}
        annotationFormActive={this.props.annotationFormActive}
        annotationSizzle={this.props.annotationSizzle}
  
       />

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