import React from 'react';
import SongPageHeader from './song_page_header';
import SongPageLyrics from './song_page_lyrics';
import SongPageAnnotation from './song_page_annotation';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeAnnotationId: -1,
      annotationSizzle: '',
    }
    this.songPageLyricsRef = React.createRef();
    this.setCurrAnnotation = this.setCurrAnnotation.bind(this);

  }
  componentDidMount() {

    const fetchSong = this.props.fetchSong(this.props.match.params.songId);
    const fetchRefs = this.props.fetchReferents(this.props.match.params.songId);
    const fetchAnnots = this.props.fetchAnnotations(this.props.match.params.songId);

    Promise.all( [fetchSong, fetchRefs, fetchAnnots]);
  }

  setCurrAnnotation(id, sizzleText) {

    console.log(sizzleText);

    this.setState({ activeAnnotationId: id, annotationSizzle: sizzleText });
  
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    let { song, referents, createReferent, createAnnotation, deleteAnnotation } = this.props;

    return (
      <div className="song-page">
        
        <SongPageHeader song={this.props.song}/>
        
        <div onClick={(e) => this.songPageLyricsRef.current.resetActiveRegion(e)} className="song-page-detail">
          <div className="song-page-detail-wrapper">
            <div>
              <SongPageLyrics 
                ref={this.songPageLyricsRef}
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
                annotationSizzle={this.state.annotationSizzle}
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