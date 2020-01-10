import React from 'react';
import ChartIndexFilterRow from './chart_index_filter_row';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

class ChartIndexFilter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      genre: this.props.genre,
      number_songs: "5",
      drop_down_active: false

    }

    this.rotate = this.rotate.bind(this);
    this.renderDropdownArrow = this.renderDropdownArrow.bind(this);
    this.renderDropdownMenu = this.renderDropdownMenu.bind(this);

  }

  rotate() {
    this.setState({ drop_down_active: !this.state.drop_down_active});
  }

  renderDropdownArrow() {

    if ( this.state.drop_down_active === false) {
      return (
        <div
          onClick={this.rotate}
          className="drop-down-inactive">
          <svg width="30" height="15" viewBox="-10 -10 50 25">
            <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
          </svg>
        </div>
      )
    } 

    return (
        <div
          onClick={this.rotate}
          className="drop-down-active">

          <svg width="30" height="15" viewBox="-10 -10 50 25">
            <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path> 
          </svg>
        </div>
    )

  }
  
  renderDropdownMenu() {

    if ( this.state.drop_down_active ) {

      /* drop down categories */
      const genre = ["GENRE", 'All', 'Pop', 'Rock', 'Hip Hop', 'Death Metal'];
      const results = ["RESULTS", 5, 10, 20, "-", "-"];

      return (
        <div className="drop-down-menu">
          { genre.map ( (entry, idx) => <ChartIndexFilterRow key={idx} genre={entry} result={results[idx]} /> )}
        </div>
      )

    }
  }

  render() {

  
    return (

    <div className="chart-index-filter-wrapper">
      
      <div className="chart-index-filter">

        <div className ="filter-text">
            <p>{this.state.genre.toUpperCase()}&nbsp;&nbsp;<span>&#8260;</span>&nbsp;&nbsp;FILTER</p>
        </div>

        {this.renderDropdownArrow()}

      </div>
      
      { this.renderDropdownMenu() }
    </div>
    )


  }

}

export default ChartIndexFilter;


