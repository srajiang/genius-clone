import  { connect } from 'react-redux';
import SearchBar from './search_bar';

const mSTP = (state) => ({

  songs: state.entities.songs,

})

const mDTP = (dispatch) => ({


})

export default connect(mSTP, mDTP)(SearchBar);