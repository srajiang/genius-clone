import { connect } from 'react-redux';
import SessionForm from './session_form'; 
import { signupUser } from '../actions/session_actions';

const mSTP = () => ({

  formType: "Sign Up"

})

const mDTP = (dispatch) => ({

  action: (user) => dispatch(signupUser(user))

})

export default connect(mSTP, mDTP)(SessionForm);