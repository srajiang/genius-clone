import React from 'react';

const SongPageHeader = (props) => {
  
  return (

    <div 
      style={{ backgroundImage: "url(" + props.song.imageUrl + ")" }}
      className="song-page-header"
    >
      
      <div className="song-page-header-overlay"></div>

      <div className="song-page-header-content">
      
        <div className="album-cover"><img src={props.song.imageUrl} /></div>

        <div className="song-page-header-detail">
          <h2>{props.song.title}</h2>
          <h3>{props.song.artist}</h3>
          <div>
            <p>{props.song.album}</p>
          </div>

        </div>
      </div>

    </div>

  )

}
export default SongPageHeader;