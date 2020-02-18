import  { connect } from 'react-redux';
import SearchBar from './search_bar';
import { search } from '../../actions/search_actions';

const mSTP = (state) => ({

  songs: state.entities.search_results

})

const mDTP = (dispatch) => ({

  search: (searchInput) => dispatch(search(searchInput)) 

})

export default connect(mSTP, mDTP)(SearchBar);