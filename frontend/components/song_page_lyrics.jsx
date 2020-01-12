import React from 'react';
// import SongPageLyricLine from './song_page_lyric_line';

const SongPageLyrics = ({lyrics}) => {

  return (
    <div className ="song-page-lyrics">
      <p>Lyrics</p>  
      
      {lyrics.map((line, idx) => <p key={idx} >{line}</p>)}
      
    </div>
  )

}

export default SongPageLyrics;