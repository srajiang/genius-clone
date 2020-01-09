import React from 'react';

class ChartIndexFilter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      genre: this.props.genre,
      number_songs: "5"

    }
  }

  render() {

    return (

    <div className="btn chart-index-filter">

      <div className ="filter-text">
          <p>{this.state.genre.toUpperCase()}&nbsp;&nbsp;<span>&#8260;</span>&nbsp;&nbsp;FILTER</p>
      </div>

      <div className="down-button">
        <svg width="30" height="15" viewBox="-10 -10 50 25">
          <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path> {/* still not quite working */}
        </svg>
      </div>

    </div>

    )


  }

}

export default ChartIndexFilter;


