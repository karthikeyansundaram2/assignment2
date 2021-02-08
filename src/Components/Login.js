import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';
import { FormErrors } from './FormError';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: '',
      password: '',
      UserType: 'student',
      RegisterUserType: 'student',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  onValueChange = (e) => {
    this.setState({
      UserType: e.target.value
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleClick = (e) => {
    this.props.history.push('/registration');
    e.preventDefault();
  }

 handleChange=(e)=>{
     e.preventDefault()
     this.props.history.push('/dashboard');

 }
  render() {
    return (
      <div className="loginContainer">
        <div className="login-menu">
          <form className="demoForm" onSubmit={this.handleSubmit}>
         

            <div >
              <input type="email" required name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput} />
            </div>

            <div >
              <input type="password" name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput} />
                  <div className='error-message' >
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            </div>

            <div >
              <input type="radio" value="student"
                checked={this.state.UserType === "Student"}
                onChange={this.onValueChange} />
              <label htmlFor="Student">Student</label>
              <input type="radio" value="expert" checked={this.state.UserType === "Teacher"}
                onChange={this.onValueChange} />
              <label htmlFor="Teacher">Teacher</label>
            </div>
            <button type='submit' name="Login" value='Login' disabled={!this.state.formValid} onClick={this.handleChange} >Login</button>


            <div className='error-message' >
              <FormErrors formErrors={this.state.formErrors} />
            </div>

          </form>
          </div>

          <div className="register-menu">
            <form className="demoForm" onSubmit={this.handleClick}>
              <label htmlFor="Registration">New User? Register Now</label>
              <br/>
              <input type='submit' value='Register' />
            </form>
          </div>

        
      </div>
    )
  }

}
export default withRouter(Login);
