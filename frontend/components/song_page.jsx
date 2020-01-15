import React from 'react';
import SongPageHeader from './song_page_header';
import SongPageLyrics from './song_page_lyrics';
import SongPageAnnotation from './song_page_annotation';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeAnnotationId: -1,
    }

    this.setCurrAnnotation = this.setCurrAnnotation.bind(this);

  }
  componentDidMount() {

    const fetchSong = this.props.fetchSong(this.props.match.params.songId);
    const fetchRefs = this.props.fetchReferents(this.props.match.params.songId);
    const fetchAnnots = this.props.fetchAnnotations(this.props.match.params.songId);

    Promise.all( [fetchSong, fetchRefs, fetchAnnots]);
  }

  setCurrAnnotation(id) {
    this.setState({ activeAnnotationId: id }/* , () => console.log(this.state.activeAnnotationId) */);
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    let { song, referents, createReferent, createAnnotation, deleteAnnotation } = this.props;

    return (
      <div className="song-page">
        
        <SongPageHeader song={this.props.song}/>
        
        <div className="song-page-detail">
          <div className="song-page-detail-wrapper">
            <div>
              <SongPageLyrics 
                song={song} 
                lyrics={song.body} 
                referents={referents} 
                createReferent={createReferent}
                setCurrAnnotation={this.setCurrAnnotation} />
            </div>
            <div className="song-page-detail-annotation">
              <SongPageAnnotation 
                song={this.props.song}
                annotations={this.props.annotations}
                createAnnotation={createAnnotation}
                deleteAnnotation={deleteAnnotation}
                activeAnnotationId={this.state.activeAnnotationId}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default SongPage;