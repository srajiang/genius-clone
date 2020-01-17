import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class SongPageAnnotationForm extends React.Component {
  
  constructor(props) {
    super(props);

    let temp;
    if (this.props.currAnnotation !== undefined) {
      temp = this.props.currAnnotation.body;
    } else {
      temp = ""
    }

    this.state = {
      body: temp
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCreateAnnotation = this.handleCreateAnnotation.bind(this);
    // this.handleFetchReferents = this.handleFetchReferents.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault;
    
    if (this.props.formType === "Edit") {

      let annotation = {
        id: this.props.currAnnotation.id,
        body: this.state.body,
        referent_id: this.props.currAnnotation.referentId,
        annotator_id: this.props.currentUserId
      }

      let currSizzle = document.getElementsByClassName('sizzle')[0].innerText

      this.props.updateAnnotation(annotation)
        .then(() => this.props.setCurrAnnotationStatus(annotation.id, currSizzle, false))

    } 

    if (this.props.formType === "Create") {

      let activeRegion = document.getElementsByClassName('active-temp');
      
      let start = parseInt(activeRegion[0].id);
      let end = parseInt(activeRegion[activeRegion.length -1].id) + 1;

      let referent = {
        fragment_range_start: start, 
        fragment_range_end: end,
        song_id: parseInt(this.props.match.params.songId)
      }

      //step one: create the referent (async function with a .then)

      this.props.createReferent(referent)
        .then(action => this.handleCreateAnnotation(action.referent))
      
    }

  }

  // handleFetchReferents(annotation) {

  //   let sizzleLyrics = document.getElementsByClassName('sizzle')[0].innerText;
    
  //   this.props.fetchReferents()
  //     .then(() => this.props.setCurrAnnotationStatus(annotation.id, sizzleLyrics, false))
  // }


  handleCreateAnnotation(referent) {
    
    let sizzleLyrics = document.getElementsByClassName('sizzle')[0].innerText;


    this.props.setCurrReferentStatus(referent.id);

    let annotation = {
      body: this.state.body,
      referent_id: this.props.activeReferentId,
      annotator_id: this.props.currentUserId
    }

    this.props.createAnnotation(annotation)
      .then((action) => this.props.setCurrAnnotationStatus(action.annotation.id, sizzleLyrics, false))
  

  }
  
  handleUpdate(e) {

    this.setState({ body: e.target.value});
  }

  textAreaAdjust(e) {
    e.target.style.height = "1px";
    e.target.style.height = (25 + e.target.scrollHeight) + "px";
  }

  renderAnnotationDetail() {

    if (this.props.formType === "Edit") {
      return (
        <div className="annotation-detail">
          Last updated by&nbsp;<span className="annotation-emphasis">{this.props.currAnnotation.annotator}</span>
        </div>
      )
    }

  }

  renderTextForm() {

    if(this.props.formType === "Edit") {
      return (

        <form className="annotation-edit-form" onSubmit={this.handleSubmit} action="">
          <textarea
            autoFocus
            style={{ height: this.props.height }}
            onKeyUp={this.textAreaAdjust}
            onChange={this.handleUpdate}
            className="annotation-edit-field" type="text"
            value={this.state.body}
          />
          <input className="annotation-edit-submit" type='submit' value="Submit Edit"></input>
        </form>

      )
    } else if(this.props.formType === "Create") {  

      return(
        <form className="annotation-edit-form" onSubmit={this.handleSubmit} action="">
          <textarea
            autoFocus
            style={{ height: this.props.height }}
            onKeyUp={this.textAreaAdjust}
            onChange={this.handleUpdate}
            className="annotation-edit-field" type="text"
            placeholder="Start annotating here"
          />
          <input className="annotation-edit-submit" type='submit' value="Create Annotation"></input>
        </form>

      )
    }
  }

  render() {
    
    let formattedSizzle = this.props.annotationSizzle.split("\n")

    return (

      <div>

        <div className="header"><p>{this.props.formType.toUpperCase()} ANNOTATION</p></div>

        { this.renderAnnotationDetail() }

        <div className="sizzle">

          <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
          { formattedSizzle.map( (lyric, idx) => <div key={idx} className="sizzle-lyric">{lyric}</div>) }

        </div>

        { this.renderTextForm() }

      </div>

    )

  }


}

export default withRouter(SongPageAnnotationForm);