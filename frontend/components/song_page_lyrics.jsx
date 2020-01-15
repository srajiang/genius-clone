import React from 'react';
import { range } from 'lodash';

class SongPageLyrics extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeReferentId: -1,
    }

    this.reconcileReferentsToLyrics = this.reconcileReferentsToLyrics.bind(this);
    this.setCurrReferent = this.setCurrReferent.bind(this);
  }

  setCurrReferent(e) {

    let refId = parseInt(e.currentTarget.getAttribute('refid'));
    this.setState({ activeReferentId: refId });
    let annotationIds = this.props.referents[refId].annotationIds[0];
    this.props.setCurrAnnotation(annotationIds);

  }


  reconcileReferentsToLyrics(lyrics) {

    let referentStartEndHash = {};
    let referentAllLinesSet = new Set();


    let ref_keys = Object.keys(this.props.referents);

    /* loops through the referent data and parses */


    for ( let ref_key of ref_keys ) {

      let referent = this.props.referents[ref_key];

      let tempRange = _.range(referent.fragmentRangeStart, referent.fragmentRangeEnd);
      tempRange.forEach( (ele) => referentAllLinesSet.add(ele));

      referentStartEndHash[referent.fragmentRangeStart] = [referent.fragmentRangeEnd, referent.id];
      
    }

    let reconciledLyrics = [];

    /* loops through the lyrics forming an array with correct javascript elems */
    
    let i = 0;

    while (i < lyrics.length) {

      if (!referentAllLinesSet.has(i)) {  /* lyric is not part of a referent */
        

        if (lyrics[i][0] === "[") {  /* lyric is a header */

          reconciledLyrics.push(
            <div key={Math.random() * 100000000}>
              <br></br>
              <p key={i} >{lyrics[i]}</p>
            </div>
          )
          
          i++;
          
        } else {

          reconciledLyrics.push( <p key={i} > {lyrics[i]}</p> ) /* lyric is not a header */
          
          i++;
        }

      } else { /* lyric line IS part of a referent  */


        // take the key val pair for fragment start and end and use it to slice the lyrics
        let slice = lyrics.slice(i, referentStartEndHash[i][0]);
        
        //take sliced song lines and push to reconciledLyrics as a nested JS element
        
        let active = (referentStartEndHash[i][1] === this.state.activeReferentId) ? "active": "";

        reconciledLyrics.push(
          
          <div 
            onClick={this.setCurrReferent} 
            refid={referentStartEndHash[i][1]} 
            key={Math.random() * 100000000} className={`referent ${active}`}>

              {slice.map((lyric, idx) => <p key={i + idx} ><span>{lyric}</span></p>)}
              
          </div>
        )
        
        let oldStart = i;

        //reset i to the end of the song referent range to continue reading the lyrics 
        i = referentStartEndHash[i][0]; 
  
        // remove the key val pair from referentStartEndHash
        delete referentStartEndHash[oldStart];

      }

    }

    return reconciledLyrics;

  
  }

  render() {


    let { song, lyrics, referents } = this.props;

    if ( referents === undefined ) {
      return null;
    } 

    return (
      <div className="song-page-lyrics">
        <p className="song-page-lyrics-title">{song.title.toUpperCase()} LYRICS</p>

        {this.reconcileReferentsToLyrics(lyrics)}

      </div>
    )

  }
  

}

export default SongPageLyrics;