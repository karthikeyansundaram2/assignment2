import React from 'react';
import './Registeration.css'
import { FormErrors } from './FormError';
class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      dob: '',
      role: 'student',
      skills: [],

      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
  }
  handleChange = (e) => {
    this.setState({
      role: e.target.value
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
      passwordValid: passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid  });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  handleSubmit=(e)=>{
      this.props.history.push('/dashboard')
      e.preventDefault();
  }


  render() {

      return (
        <div className="registrationContainer">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Signup Form</legend>
              <div >
                <input type="radio" value="student"
                  checked={this.state.role === "student"}
                  onChange={this.handleChange} />
                <label htmlFor="Customer">Student</label>
                <input type="radio" value="expert" checked={this.state.role === "teacher"}
                  onChange={this.handleChange} />
                <label htmlFor="Teacher">Teacher</label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter your name *"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleUserInput}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter email *"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleUserInput}
                  required
                />
              </div>
              <div>

                <input
                  type="password"
                  placeholder="Enter Password *"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleUserInput}
                  required
                />
              </div>
             
              <div>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleUserInput}
                  required
                />
              </div>
            
              <input type='submit' value='Submit' disabled={!this.state.formValid} />

              <div className='error-message' >
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </fieldset>
          </form>
        </div>
      );
    
  
  }
}


export default Registration;
