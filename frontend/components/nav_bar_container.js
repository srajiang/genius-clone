import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logoutUser } from '../actions/session_actions'


const mapStateToProps = state => ({

  currentUserId: state.session.currentUserId

})

const mapDispatchToProps = dispatch => ({

  logoutUser: (currentUserId) => dispatch(logoutUser(currentUserId))

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);