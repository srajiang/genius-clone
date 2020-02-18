import React from 'react';
import {Link} from 'react-router-dom';

const SearchBarItem = ({song}) => {

  return (

    <Link to={`/songs/${song.id}`} className="search-bar-item">
      <div className="search-item-img">
        <img src={song.imageUrl} />
      </div>
      <div>
        <li className="search-item-title">{song.title}</li>
        <div className="search-item-artist">{song.artist}</div>
      </div>
    </Link>
  )


}

export default SearchBarItem;