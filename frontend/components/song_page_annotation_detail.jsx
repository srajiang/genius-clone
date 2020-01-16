import React from 'react';


// import SongPageAnnotationForm from './song_page_annotation_form';
// import SongPageAnnotationEditContainer from './song_page_annotation_edit_container';
// import SongPageAnnotationCreateContainer from './song_page_annotation_create_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class SongPageAnnotationDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: null,
      currAnnotation: this.props.annotations[this.props.activeAnnotationId]
    }

    this.updateAnnotation = this.updateAnnotation.bind(this);
  }


  textAreaAdjust(e) {
    e.target.style.height = "1px";
    e.target.style.height = (25 + e.target.scrollHeight) + "px";
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
            Last updated by&nbsp;<span className="annotation-emphasis">{this.state.currAnnotation.annotator}</span>
          </div>
          <div className="sizzle">

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {this.props.annotationSizzle + annotationSizzleEnd}

          </div>

          <div className="annotation-body">{this.state.currAnnotation.body}</div>

          <div className="annotation-detail">

              <span onClick={() => this.updateAnnotation(this.props.activeAnnotationId, this.props.annotationSizzle)} className="annotation-edit-button">Edit this annotation</span>

          </div>


        </div>
      )

    }

    if (this.props.activeAnnotationId !== -1 && this.props.annotationFormActive) { /* update annotation form */

      return (

        // <SongPageAnnotationEditContainer
        //   currAnnotation={this.state.currAnnotation}
        //   annotationSizzle={this.props.annotationSizzle}
        //   annotationSizzleEnd={annotationSizzleEnd}
        // />

        <div>

          <div className="header"><p>EDIT ANNOTATION</p></div>

          <div className="annotation-detail">
            Last updated by&nbsp;<span className="annotation-emphasis">{this.state.currAnnotation.annotator}</span>
          </div>

          <div className="sizzle">

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {this.props.annotationSizzle + annotationSizzleEnd}

          </div>

          <form className="annotation-edit-form" onSubmit={this.handleSubmit} action="">
            <textarea 
              autoFocus
              style={{ height: this.state.height}}
              onKeyUp={this.textAreaAdjust} 
              className="annotation-edit-field" type="text" 
              defaultValue={this.state.currAnnotation.body}
            />
            <input className="annotation-edit-submit" type='submit' value="Submit Edit"></input>
          </form>

        </div>
      )
    } 

    // return (
    //   <SongPageAnnotationCreateContainer
    //     currAnnotation={this.state.currAnnotation}
    //     annotationSizzle={this.props.annotationSizzle}
    //     annotationSizzleEnd={annotationSizzleEnd}
    //   />
    // )

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