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
    this.renderSongsByLyric = this.renderSongsByLyric.bind(this);
    this.renderSongsByTitle = this.renderSongsByTitle.bind(this); 
  }

  renderSearchItemsOrNull(songs, byLyric, byArtist) {

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


    if (!songs || songs.length === 0) return <p id="search-null">No results</p>;


    return ( 
      songs.map((song, idx) => {
        if (idx < 4) return < SearchBarItem input={this.state.input} displayArtist={byArtist} displayLyric={byLyric} song={song} key={idx} />
      })  
    )

  }

  renderSongsByTitle() {
    let songsByTitle;
    if (this.props.songs.songsByTitle) {
      songsByTitle = Object.values(this.props.songs.songsByTitle);
    }

    return (
      <>
        <p className="search-bar-header-sub">SONGS</p>
        <ul className="search-bar-index">
          {this.renderSearchItemsOrNull(songsByTitle, false)}
        </ul>
      </>
    )

  }

  renderSongsByLyric() {

    let songsByLyric;
    if (this.props.songs.songsByLyric) {
      songsByLyric = Object.values(this.props.songs.songsByLyric);
    }

    return(
      <>
        <p className="search-bar-header-sub">LYRIC MATCHES</p>
        <ul className="search-bar-index">
          {this.renderSearchItemsOrNull(songsByLyric, true)}
        </ul>
      </>
    )
  }

  renderSearchOptions() {

    if (this.props.searchBarActive === false) return null;

    return (
      <div className="search-bar-dropdown">
        <p className="search-bar-header">SEARCH RESULTS</p>
        {this.renderSongsByTitle()}
        { this.state.input && this.renderSongsByLyric()}
      </div>
    );
  }

  submit(e) {

    e.preventDefault();
    dispatch(updateSearchBarState(true));

  }

  
  updateInput(e) {

    dispatch(updateSearchBarState(true));

    this.setState({ input: e.target.value, loading: true, active: true });
    this.searchDebounced().then( () => this.setState({ loading: false}));
  }


  dismissSearch() {
    this.setState({ active: false })
  }

  render() {

    return (
      <div className="left-nav-container">
        <div className="left-nav">
          <form onSubmit={e => this.submit(e)}>
            <input
              className="search-input"
              placeholder="Search lyrics & more"
              value={this.state.input}
              onChange={e => this.updateInput(e)}
            ></input>
          </form>

          <FontAwesomeIcon className="left-nav-icon" icon={faSearch} />
        </div>
        {this.renderSearchOptions()}
      </div>
    );
  }

}

export default SearchBar;

