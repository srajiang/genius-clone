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
      annotationFormActive: false,
      activeReferentId: -1

    }

    this.songPageLyricsRef = React.createRef();
    this.setCurrAnnotationStatus = this.setCurrAnnotationStatus.bind(this);
    this.setCurrReferentStatus = this.setCurrReferentStatus.bind(this);
  }

  componentDidMount() {

    const fetchSong = this.props.fetchSong(this.props.match.params.songId);
    const fetchRefs = this.props.fetchReferents(this.props.match.params.songId);
    const fetchAnnots = this.props.fetchAnnotations(this.props.match.params.songId);

    Promise.all( [fetchSong, fetchRefs, fetchAnnots]);
  
  }

  setCurrAnnotationStatus(id, sizzleText, formActive) {

    this.setState({ 
      activeAnnotationId: id, 
      annotationSizzle: sizzleText, 
      annotationFormActive: formActive

    }, ()=> console.log(this.state));

  }

  setCurrReferentStatus(id) {

    this.setState({
      activeReferentId: id
    })
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }

    let { song, referents, createReferent, createAnnotation, deleteAnnotation } = this.props;

    return (
      <div className="song-page">
        
        <SongPageHeader song={this.props.song}/>
        
        <div onClick={(e) => this.songPageLyricsRef.current.resetActiveRegionOnClick(e)} className="song-page-detail">
          <div className="song-page-detail-wrapper">
            <div>
              <SongPageLyrics 
                ref={this.songPageLyricsRef}
                song={song} 
                lyrics={song.body} 
                referents={referents} 
                createReferent={createReferent}
                activeReferentId={this.state.activeReferentId}
                setCurrReferentStatus={this.setCurrReferentStatus}
                setCurrAnnotationStatus={this.setCurrAnnotationStatus} />
            </div>
            <div className="song-page-detail-annotation">
              <SongPageAnnotation 
                song={this.props.song}
                annotations={this.props.annotations}
                createAnnotation={createAnnotation}
                deleteAnnotation={deleteAnnotation}
                activeAnnotationId={this.state.activeAnnotationId}
                annotationSizzle={this.state.annotationSizzle}
                annotationFormActive={this.state.annotationFormActive}
                setCurrReferentStatus={this.setCurrReferentStatus}
                activeReferentId={this.state.activeReferentId}
                setCurrAnnotationStatus={this.setCurrAnnotationStatus}
                currentUserId={this.props.currentUserId}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default SongPage;