import React from 'react';
import { range } from 'lodash';

class SongPageLyrics extends React.Component {

  constructor(props) {
    super(props)

    this.reconcileReferentsToLyrics = this.reconcileReferentsToLyrics.bind(this);
  }

  reconcileReferentsToLyrics(lyrics) {

    let referentStartEndHash = {};
    let referentAllLinesSet = new Set();

    /* loops through the referent data and parses */
    for (let referent of this.props.referents) {

      console.log(referent);
      console.log('start', referent.fragment_range_start);
      console.log('end', referent.fragment_range_end);

      let tempRange = _.range(referent.fragment_range_start, referent.fragment_range_end);
      tempRange.forEach( (ele) => referentAllLinesSet.add(ele));

      referentStartEndHash[referent.fragment_range_start] = referent.fragment_range_end;
      console.log(referentStartEndHash);
    }
    
    console.log('referentStartEndHash', referentStartEndHash);
    console.log('referentAllLinesSet:', referentAllLinesSet);

    let reconciledLyrics = [];

    /* loops through the lyrics forming an array with correct javascript elems */
    
    let i = 0;

    while (i < lyrics.length) {
      // console.log('i', i);

      if (!referentAllLinesSet.has(i)) {  /* lyric is not part of a referent */
        
        // console.log('not referent');
        // console.log(lyrics[i].includes('['));

        if (lyrics[i][0] === "[") {  /* lyric is a header */

          reconciledLyrics.push(
            <div key={i}>
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

        // console.log('start', i);
        // console.log('end', referentStartEndHash[i]);

        // take the key val pair for fragment start and end and use it to slice the lyrics
        let slice = lyrics.slice(i, referentStartEndHash[i]);

        // console.log('slice', slice);

        let oldStart = i;

        //reset i to the end of the song referent range to continue reading the lyrics 
        i = referentStartEndHash[i]; 

        // console.log("newI", i);
        
        // remove the key val pair from referentStartEndHash
        delete referentStartEndHash[oldStart];

        //take sliced song lines and push to reconciledLyrics as a nested JS element

        reconciledLyrics.push(

          <div className="referent">
            {slice.map((lyric, idx) => <p key={idx} ><span>{lyric}</span></p>)}
          </div>
        )

      }

    }

    return reconciledLyrics;

    //loop through the lyrics
      //if the line is included 

    //2d array to store the lyrics
    //get all the referent start and ends

    //loop through all of the lyrics in the body
    //if there's a referent that starts at that line
      //push the line into a 
  }

  render() {

    let { song, lyrics, referents } = this.props;

    if ( referents === undefined ) {
      return null;
    } 

    return (
      <div className="song-page-lyrics">
        <p className="song-page-lyrics-title">{song.title.toUpperCase()} LYRICS</p>

        {/* {lyrics.map((line, idx) => {

          if (line[0] === "[") {

            return (
              <div key={idx}>
                <br></br>
                <p key={idx} >{line}</p>
              </div>)

          } else {

            return <p key={idx} > {line}</p>
          }
        })

        } */}

        {this.reconcileReferentsToLyrics(lyrics)}

      </div>
    )

  }
  

}

export default SongPageLyrics;