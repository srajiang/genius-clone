import React from 'react';

import SongPageAnnotationForm from './song_page_annotation_form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const SongPageAnnotationDetail = (props) => {

  let annotationSizzleEnd = (!props.annotationSizzle.includes("?")) ? "..." : "";

  const triggerEdit = () => {

    console.log('trying to edit');

  }

  const renderAnnotationOrForm = () => {

    let currAnnotation = props.annotations[props.activeAnnotationId];

    if (props.activeAnnotationId !== -1) {
      return (
        <div>
          {/* <div className="annotation-detail">
            Last update by &nbsp;<span className="annotation-emphasis">{currAnnotation.annotator}</span>
          </div> */}
          <div className="header"><p>GENIUS ANNOTATION</p></div>
          <div className="annotation-detail">
            Last update by&nbsp;<span className="annotation-emphasis">{currAnnotation.annotator}</span>
          </div>
          <div className="sizzle">

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {props.annotationSizzle + annotationSizzleEnd}

          </div>

          {currAnnotation.body}

          <div className="annotation-detail">

              <span onClick={triggerEdit} className="annotation-edit-button">Add to this annotation</span>

          </div>


        </div>
      )
    }

    if (props.annotationFormActive) {
      return (

        <div>
          I am a new annotation form
        </div>

        // <SongPageAnnotationForm />

      )
    } 

  }

  return (  /* render form or annotation */

    <div className="annotation">

      <div className="song-page-annotation">

        { renderAnnotationOrForm() }

      </div>
    </div>

  )


}

export default SongPageAnnotationDetail;