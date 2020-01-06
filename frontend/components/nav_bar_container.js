import { connect } from 'react-redux';
import NavBar from './nav_bar';


const mapStateToProps = state => ({

  currentUserId: state.session.currentUserId

})

export default connect(mapStateToProps, null)(NavBar);