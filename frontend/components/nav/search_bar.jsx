import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Loader from "react-loader-spinner";
import { updateSearchBarState } from '../../actions/ui_actions';

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

    return ( 
      songs.map((song, idx) => {
        if (idx < 9) return < SearchBarItem song={song} key={idx} />
      })  
    )

  }

  renderSearchOptions() {

    if (this.props.searchBarActive === false) return null;

    let songs;
    if (this.props.songs.songsByTitle) {
      songs = Object.values(this.props.songs.songsByTitle);
    }

    return (

      <div className="search-bar-dropdown">
        <p className="search-bar-header">Search Results</p>
        <ul className="search-bar-index">

          {
            this.renderSearchItemsOrNull(songs)
          }
        </ul>
      </div>

    )
  }

  
  updateInput(e) {
    
    dispatch(updateSearchBarState(true));

    this.setState({ input: e.target.value, loading: true, active: true});
    this.searchDebounced().then( () => this.setState({ loading: false}));
  }


  dismissSearch() {
    this.setState({ active: false })
  }

  render() {

    return(

      <div className="left-nav-container">
        < div className="left-nav">

          <form>
            <input
            className="search-input" 
            placeholder="Search lyrics & more"
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

