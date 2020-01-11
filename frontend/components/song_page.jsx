import React from 'react';
import SongPageHeader from './song_page_header';

class SongPage extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
      .then(() => console.log(this.props));
    // console.log(this.props);
  }

  render() {
  
    if (this.props.song === undefined) {
      return null;
    }
    
    return (
      <SongPageHeader song={this.props.song}/>
      // <div>I am a song page header</div>
    )
  }


}

export default SongPage;