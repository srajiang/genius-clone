import React from 'react';


// import SongPageAnnotationForm from './song_page_annotation_form';
import SongPageAnnotationEditContainer from './song_page_annotation_edit_container';
import SongPageAnnotationCreateContainer from './song_page_annotation_create_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class SongPageAnnotationDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: null,
      // currAnnotation: this.props.annotations[this.props.activeAnnotationId]
    }

    this.updateAnnotation = this.updateAnnotation.bind(this);
  }


  updateAnnotation(currId, currSizzle){

    if (this.props.currentUserId === undefined) {

      console.log('no user logged in')

    } else {

      this.setState({ height: document.getElementsByClassName('annotation-body')[0].offsetHeight}, ()=> console.log(this.state.height));
      this.props.setCurrAnnotationStatus(currId, currSizzle, true);

    }

  }

  renderAnnotationOrForm() {

    let annotationSizzleEnd = (!this.props.annotationSizzle.includes("?")) ? "..." : "";

    if (this.props.activeAnnotationId !== -1 && !this.props.annotationFormActive) { /* annotation show */
      
      return (
        <div>

          <div className="header"><p>GENIUS ANNOTATION</p></div>
          <div className="annotation-detail">
            Last updated by&nbsp;<span className="annotation-emphasis">{this.props.annotations[this.props.activeAnnotationId].annotator}</span>
          </div>
          <div className="sizzle">

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {this.props.annotationSizzle + annotationSizzleEnd}

          </div>

          <div className="annotation-body">{this.props.annotations[this.props.activeAnnotationId].body}</div>

          <div className="annotation-detail">

              <span onClick={() => this.updateAnnotation(this.props.activeAnnotationId, this.props.annotationSizzle)} className="annotation-edit-button">Edit this annotation</span>

          </div>


        </div>
      )

    }

    if (this.props.activeAnnotationId !== -1 && this.props.annotationFormActive) { /* update annotation form */
      return (

        <SongPageAnnotationEditContainer
          setCurrAnnotationStatus={this.props.setCurrAnnotationStatus}
          currAnnotation={this.props.annotations[this.props.activeAnnotationId]}
          annotationSizzle={this.props.annotationSizzle}
          annotationSizzleEnd={annotationSizzleEnd}
          height={this.state.height}
        />
      )
    } 

    return (
      <SongPageAnnotationCreateContainer
        setCurrAnnotationStatus={this.props.setCurrAnnotationStatus}
        currAnnotation={this.props.annotations[this.props.activeAnnotationId]}
        annotationSizzle={this.props.annotationSizzle}
        annotationSizzleEnd={annotationSizzleEnd}
        setCurrReferentStatus={this.props.setCurrReferentStatus}
        activeReferentId={this.props.activeReferentId}
      />
    )

  }

  render() {
    
    return (  /* render form or annotation */
  
      <div className="annotation">
  
        <div className="song-page-annotation">
  
          { this.renderAnnotationOrForm() }
  
        </div>
      </div> 
    )    
  }


}

export default SongPageAnnotationDetail;