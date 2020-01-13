import React from 'react';

const SongPageLyrics = ({song}) => {

  return (
    <div className ="song-page-lyrics">
      <p className="song-page-lyrics-title">{song.title.toUpperCase()} LYRICS</p>  
      
      {song.body.map( (line, idx) => {
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
      }

    </div>
  )

}

export default SongPageLyrics;