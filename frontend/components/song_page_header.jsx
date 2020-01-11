import React from 'react';

const SongPageHeader = (props) => {
  
  return (

    <div className="song-page-header">

      <div className="song-page-header-overlay">

        <div className="song-page-header-content">
        
          <img src={props.song.image_url} />

          <div className="detail">
            <h2>{props.song.title}</h2>
            <h3>{props.song.artist}</h3>
            <h3>{props.song.album}</h3>
          </div>
        </div>
      </div>

    </div>

  )

}
export default SongPageHeader;