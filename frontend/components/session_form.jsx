import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      username: "",
      email: "",
      password: "",
      email_or_user: ""

    }


    this.matchEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.handleSubmit = this.handleSubmit.bind(this);    
   
  }

  handleSubmit(e) {
    e.preventDefault;
    
    /* remove the temporary piece of state to track email_or_user */
    let user = this.state;
    delete user.email_or_user;
    
    this.props.action(user);

  }

  update(updateField) {

    return (e) => {
      
      let updateVal = e.currentTarget.value;
      let otherField = 'username';
      
      if (updateField === 'email_or_user') { //if email or user
        
        if (this.matchEmail.test(updateVal) === true) {
          otherField = 'email';
          this.setState( { username: '' });
        }

        this.setState( { [updateField]: updateVal, [otherField]: updateVal });

      } else  {

        this.setState( { [updateField]: updateVal })

      }

    }    

  }

  renderEmailOrUserField() {

    if (this.props.formType === "Sign In") {

      return (
        <input
          type="text"
          className="session-form-input"
          placeholder="Username or email address"
          value={this.state.email_or_user}
          onChange={this.update('email_or_user')}
        />
      )
    } 

    return (

      <div className="session-form-input-email-address">
        <input 
          type="text"
          className="session-form-input"
          value={this.state.email}
          placeholder="Email address"
          onChange={this.update('email')}
        />
        <input
          type="text"
          className="session-form-input"
          placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')}
        />
      </div>

    )
  }

  submitText() {

    return ( this.props.formType === "Sign In") ? "CREATE AN ACCOUNT" : "ALREADY HAVE AN ACCOUNT";

  }


  render() {

    return (

      <div>
        <div className="session-form-overlay"></div>

        <div className="session-form-wrapper">
          <div className="session-form">
            <Link to="/" className="close-x" >&times;</Link>
            <h3>{this.props.formType.toUpperCase()}</h3>

            <form onSubmit={this.handleSubmit} action="">

              {this.renderEmailOrUserField()}

              <input
                type="password"
                className ="session-form-input"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
              />
              <button className="btn" type="submit" >
                {this.props.formType}
              </button>
            
            </form>
            <Link 
              to={`/${this.props.opposingPath}`}>
              <p className="session-form-nav">{this.props.formSubmitText}</p>
            </Link>
            
          </div>
        </div>
      </div>

    )

  }


}

export default SessionForm;