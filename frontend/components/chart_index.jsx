import React from 'react';

import ChartIndexItem from './chart_index_item';
import ChartIndexFilter from './chart_index_filter';

class ChartIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      genre : "All"

    }
    
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let { songs } = this.props;

    return (

      <div className="chart-index">

        <h1>CHARTS</h1>
        <h5>TRENDING ON SNILLINGUR</h5>

        < ChartIndexFilter genre={this.state.genre}/>

        <div className="chart-index-wrapper">
          { songs.map( (song, songIdx) => <ChartIndexItem key={song.id} song={song} songIdx={songIdx+1}/>)}
        </div>

      </div>
    )

  }

}

export default ChartIndex;