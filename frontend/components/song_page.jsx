import React from 'react';
import SongPageHeader from './song_page_header';
import SongPageLyrics from './song_page_lyrics';
import SongPageAnnotation from './song_page_annotation';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    return (
      <div className="song-page">
        
        <SongPageHeader song={this.props.song}/>
        
        <div className="song-page-detail">
          <div className="song-page-detail-wrapper">
            <div><SongPageLyrics song={this.props.song} lyrics={this.props.song.body}/></div>
            <div className="song-page-detail-annotation"><SongPageAnnotation song={this.props.song} /></div>
          </div>
        </div>

      </div>
    )
  }


}

export default SongPage;