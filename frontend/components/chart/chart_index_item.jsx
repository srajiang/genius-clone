import React from 'react';
import { Link } from 'react-router-dom'

const ChartIndexItem = ({song, songIdx}) => {

  return (
      <Link to={`/songs/${song.id}`} className="chart-index-item">
        <div className="item-idx">{songIdx}</div>
        <div className="item-img">
          <img src={song.imageUrl} />
        </div>
        <div className="item-title">{song.title}<span>&nbsp;&nbsp;LYRICS</span></div>
        <div className="item-artist">{song.artist}</div>
      </Link>
  )
}

export default ChartIndexItem;