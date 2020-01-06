import React from 'react';

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

    /* handle the actual submission of the form */
    this.props.action(this.state);

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
          placeholder="Login or email address"
          value={this.state.email_or_user}
          onChange={this.update('email_or_user')}
        />
      )
    } 

    return (

      <div>
        <input 
          type="text"
          value={this.state.email}
          placeholder="Email address"
          onChange={this.update('email')}
        />
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')}
        />
      </div>

    )


  }

  render() {

    return (

      <form onSubmit={this.handleSubmit} action="">

        {this.renderEmailOrUserField()}

        <input
          type="text"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}
        />
        <input type="submit"/>
        
      </form>

    )

  }


}

export default SessionForm;