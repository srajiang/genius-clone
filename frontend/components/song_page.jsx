import React from 'react';
import SongPageHeader from './song_page_header';
import SongPageLyrics from './song_page_lyrics';
import SongPageAnnotation from './song_page_annotation';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
      .then(() => console.log(this.props));
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    return (
      <div>
        <SongPageHeader song={this.props.song}/>
        <div className="song-page-detail">
          <div><SongPageLyrics lyrics={this.props.song.body}/></div>
          <div><SongPageAnnotation /></div>
        </div>
      </div>
    )
  }


}

export default SongPage;