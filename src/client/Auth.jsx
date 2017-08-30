import React from 'react';
import {
  withRouter,
  Route,
  Link
} from 'react-router-dom';
// import signUp from './signUp.jsx';

        // <Link to="/signup" component={signUp}</Link>

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hi is it here', e.target.username.value, e.target.password.value)
    console.log('auth props:', this.props);
    /*
    e.target.username.value 
    e.target.password.value
    */
    /*
    an ajax post call to retrieve user data
    this.props.update
    */
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input className="username" name="username" type="text" placeholder="username" />
          <input className="password" name="password" type="text" placeholder="password" />
          <input className="submit" type="submit" value="Log In"/>
        </form>
        <div>
        Need to <Link to="/register">signed-up</Link>?
        </div>
      </div>
    )
  }
}

export default withRouter(Auth);