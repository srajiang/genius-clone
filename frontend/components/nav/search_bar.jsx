import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Loader from "react-loader-spinner";

import SearchBarItem from './search_bar_item';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      input: "",
      loading: false

    }
    this.searchDebounced = AwesomeDebouncePromise(
      () => this.props.search(this.state.input),
      500
    );
    this.updateInput = this.updateInput.bind(this);
    
  }

  renderSearchItemsOrNull(songs) {

    if (this.state.loading) return (
      <div id="search-bar-loader">
        <Loader
          type="TailSpin"
          color="lightgray"
          height={40}
          width={40}
        ></Loader>
      </div>
    );

    if (!songs || songs.length === 0) return <p id="search-null">No results found by that title</p>;

    console.log('SONGS', songs);
    
    return ( 
      songs.map((song, idx) => {
        if (idx < 9) return < SearchBarItem song={song} key={idx} />
      })  
    )

  }

  renderSearchOptions() {

    let songs;

    if (this.props.songs.songsByTitle) {
      songs = Object.values(this.props.songs.songsByTitle);
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

    this.setState({ input: e.target.value, loading: true});
    this.searchDebounced().then( () => this.setState({ loading: false}));
  }

  render() {

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

