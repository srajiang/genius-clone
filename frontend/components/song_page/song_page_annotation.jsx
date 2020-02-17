import React from 'react';

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

      <SongPageAnnotationDetail

        annotations={this.props.annotations}
        activeAnnotationId={this.props.activeAnnotationId}
        annotationFormActive={this.props.annotationFormActive}
        annotationSizzle={this.props.annotationSizzle}
        setCurrAnnotationStatus={this.props.setCurrAnnotationStatus}
        setCurrReferentStatus={this.props.setCurrReferentStatus}
        currentUserId={this.props.currentUserId}
        activeReferentId={this.props.activeReferentId}
        deleteAnnotation={this.props.deleteAnnotation}
        deleteReferent={this.props.deleteReferent}
        fetchReferents={this.props.fetchReferents}
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