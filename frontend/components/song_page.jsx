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
    this.props.fetchReferents(this.props.match.params.songId);
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    let { song, referents, createReferent } = this.props;

    return (
      <div className="song-page">
        
        <SongPageHeader song={this.props.song}/>
        
        <div className="song-page-detail">
          <div className="song-page-detail-wrapper">
            <div><SongPageLyrics 
                  song={song} 
                  lyrics={song.body} 
                  referents={referents} 
                  createReferent={createReferent} />
            </div>
            <div className="song-page-detail-annotation"><SongPageAnnotation song={this.props.song} /></div>
          </div>
        </div>

      </div>
    )
  }


}

export default SongPage;