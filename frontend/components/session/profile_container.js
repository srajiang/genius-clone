import { connect } from 'react-redux';
import Profile from './profile';

const mSTP = state => ({

  currentUser: Object.values(state.entities.users)[0]
  

})

const mDTP = dispatch => ({

  

})

export default connect(mSTP, mDTP)(Profile);