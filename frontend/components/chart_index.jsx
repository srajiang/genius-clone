import React from 'react';

import ChartIndexItem from './chart_index_item';
import ChartIndexFilter from './chart_index_filter';

class ChartIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      genre : "All",
      num_songs_to_display : 5
    }

    this.updateGenre = this.updateGenre.bind(this);
    this.updateNumSongs = this.updateNumSongs.bind(this);

  }

  /* will be called by ChartIndexFilter component */
  updateGenre(newGenre) {

    this.props.fetchSongs(newGenre)
      .then((newGenre) => this.setState({ genre: newGenre }));
  }

  /* will be called by ChartIndexFilter component */  
  updateNumSongs (newNum) {

    this.setState({ num_songs_to_display: newNum });

  }

  componentDidMount() {
    this.props.fetchSongs(this.state.genre);
  }

  render() {
    let { songs } = this.props;

    return (

      <div className="chart-index">

        <h1>CHARTS</h1>
        <h5>TRENDING ON SNILLINGUR</h5>

        < ChartIndexFilter 
          genre={this.state.genre} 
          updateGenre={this.updateGenre}
          updateNumSongs={this.updateNumSongs}
        />

        <div className="chart-index-wrapper">
          { songs.map((song, songIdx) => <ChartIndexItem key={song.id} song={song} songIdx={songIdx + 1} />).slice(0, this.state.num_songs_to_display)}
        </div>

      </div>
    )

  }

}

export default ChartIndex;