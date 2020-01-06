import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../actions/session_actions';

const mSTP = () => ({

  formType: "Sign In"

})

const mDTP = dispatch => ({

  action: (user) => dispatch(loginUser(user))
  
})

export default connect(mSTP, mDTP)(SessionForm);