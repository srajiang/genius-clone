import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const SongPageAnnotationDetail = (props) => {

  let annotationSizzleEnd = (!props.annotationSizzle.includes("?")) ? "..." : "";


  const renderAnnotationOrForm = () => {

    if (props.activeAnnotationId !== -1) {
      return (
        <div>

          <div className="sizzle">

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            {props.annotationSizzle + annotationSizzleEnd}

          </div>

          {props.annotations[props.activeAnnotationId].body}

          <p className="annotation-author">AuthorPlaceholder</p>

        </div>
      )
    }

    if (props.annotationFormActive) {
      return (

        <div>
          I am a new annotation form
        </div>

      )
    } 

  }

  return (  /* render form or annotation */

    <div className="annotation">

      <div className="song-page-annotation">
        <div className="header"><p>GENIUS ANNOTATION</p></div>

        {/* <div className="sizzle">

          <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
          {props.annotationSizzle + annotationSizzleEnd}

        </div>

        {props.annotations[props.activeAnnotationId].body}

        <p className="annotation-author">AuthorPlaceholder</p> */}

        { renderAnnotationOrForm() }

      </div>
    </div>

  )


}

export default SongPageAnnotationDetail;