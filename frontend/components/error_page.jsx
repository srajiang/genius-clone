import React from 'react';

import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    
    return (
        
        <div onClick={() => this.props.history.goBack()} className="error-page">
          <p className="go_back">&#171;</p>
          <p>Å nej!</p>
          <p>We were unable to find that page.</p>
        </div>

    )
  }
}

export default ErrorPage;