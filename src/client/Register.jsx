import React from 'react';
import { BrowserRouter as Router, withRouter, Route, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {red400, blueGrey800, indigo500, indigoA200, fullWhite} from 'material-ui/styles/colors'

const styles = {
  link: {
    textDecoration: 'none',
    color: red400
  },
  text: {
    color: blueGrey800
  }
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      requiredUsername: '',
      requiredPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    this.props.signedIn ? this.props.history.push("/") : null;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleRegister(e) {
    e.preventDefault();
    if (this.state.password === '' && this.state.username === '') {
      this.setState({
        requiredUsername: 'This field is required.',
        requiredPassword: 'This field is required.'
      })
    } else if (this.state.username === '') {
      this.setState({
        requiredUsername: 'This field is required.',
        requiredPassword: ''
      })
    } else if (this.state.password === '') {
      this.setState({
        requiredUsername: '',
        requiredPassword: 'This field is required.'
      })

    } else {
      this.setState({
        requiredPassword: '',
        requiredUsername: ''
      })
      await this.props.handleAuth(this.state.username, this.state.password, {type: 'register'});
    }
  }

  render() {
    return (
      <div className="auth">
        <h1 className="register" style={styles.text}> Create An Account </h1>
        <TextField
          name="username"
          type="text"
          hintText="username"
          errorText={this.state.requiredUsername}
          value={this.state.username}
          onChange={this.handleChange}/>
        <br />
        <TextField
          name="password"
          type="password"
          hintText="password"
          errorText={this.state.requiredPassword}
          onChange={this.handleChange}
          value={this.state.password}/>
        <br />
        <RaisedButton
          className='submitButton'
          backgroundColor={red400}
          label="Submit "
          labelStyle={{color: '#fff'}}
          onClick={ this.handleRegister } />
        <p> Already registered?<Link style={styles.link} to="/login"> Login</Link></p>
      </div>
    )
  }
}

export default withRouter(Register);
