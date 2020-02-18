import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchBarItem from './search_bar_item';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      input: "",

    }

    this.updateInput = this.updateInput.bind(this);
  }

  renderSearchItemsOrNull(songs) {

    if (songs.length === 0) return <p id="search-null">No results found by that title</p>;

    return (
     
      songs.map((song, idx) => {
        if (idx < 9) return < SearchBarItem song={song} key={idx} />
      })  
     
    )
  }


  renderSearchOptions() {

    let songs = Object.values(this.props.songs);

    if (this.state.input) {
      songs = songs.filter(song => song.title.includes(this.state.input))
    }

    return (

      <div id="search-bar-dropdown">
        <p id="search-bar-header">Search Results</p>
        <ul className="search-bar-index">

          {
            this.renderSearchItemsOrNull(songs)
          }
        </ul>
      </div>

    )
  }

  updateInput(e) {
    this.setState({ input: e.target.value});
  }

  render() {

    if (!this.props.songs) {
      return null;
    }

    return(

      <div className="left-nav-container">
        < div className="left-nav">

          <form>
            <input
            id="search-input" 
            placeholder="Search Lyrics & more"
            value={this.state.input}
            onChange={(e) => this.updateInput(e)}
            >

            </input>

          </form>

          

          <FontAwesomeIcon className="left-nav-icon" icon={faSearch} />

        </ div>
        {this.renderSearchOptions()}


      </div>
    )
  }

}

export default SearchBar;