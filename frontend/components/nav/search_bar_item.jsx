import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const SearchBarItem = ({song, displayLyric, input, displayArtist}) => {

  
  const getInnerHTMLString = (matchStartIdx, lyric) => {

    if (matchStartIdx === -1) return null

    let beforeSpan = lyric.slice(0, matchStartIdx);
    let span = lyric.slice(matchStartIdx, matchStartIdx + input.length);
    let afterSpan = lyric.slice(matchStartIdx + input.length);

    return beforeSpan + "<span>" + span + "</span>" + afterSpan;
  };

  // if (displayArtist) {

  //   return (
  //      <Link to={`/songs/${song.id}`} className="search-bar-item">
            
  //      </Link>
  //   )

  // }

  if (displayLyric) {

    return (
      <Link to={`/songs/${song.id}`} className="search-bar-item">
        <div className="search-item-img">
          <img src={song.imageUrl} />
        </div>

        <div>
          <li className="search-item-title">{song.title}</li>
          <div className="search-item-artist">{song.artist}</div>
          <div className="search-item-lyric-index">
    
              {song.lyrics.map((lyric, i) => {


                let matchStartIdx = lyric.toLowerCase().indexOf(input.toLowerCase());
                let innerHTML = getInnerHTMLString(matchStartIdx, lyric) || lyric;

                return (
                  <div className="search-item-lyric" key={i}>
                    <div>{ReactHtmlParser(innerHTML)}</div> 
                  </div>
                );

                }
              )}
 
          </div>
        </div>
      </Link>
    );
  }

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