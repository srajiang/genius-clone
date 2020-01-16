import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class SongPageAnnotationForm extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

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
          style={{ height: this.state.height }}
          onKeyUp={this.textAreaAdjust}
          className="annotation-edit-field" type="text"
          defaultValue={this.state.currAnnotation.body}
        />
        <input className="annotation-edit-submit" type='submit' value="Submit Edit"></input>
      </form>

    </div>

  }


}

export default SongPageAnnotationForm;