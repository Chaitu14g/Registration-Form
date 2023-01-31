import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    submitted: false,
    first: '',
    last: '',
    firstBlur: true,
    lastBlur: true,
  }

  inputChangeOne = event => {
    this.setState({
      first: event.target.value,
    })
  }

  inputChangeTwo = event => {
    this.setState({
      last: event.target.value,
    })
  }

  onFirstInputBlur = () => {
    const {first} = this.state
    if (first === '') {
      this.setState({
        firstBlur: false,
      })
    } else {
      this.setState({
        firstBlur: true,
      })
    }
  }

  onLastInputBlur = () => {
    const {last} = this.state
    if (last === '') {
      this.setState({
        lastBlur: false,
      })
    } else {
      this.setState({
        lastBlur: true,
      })
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {first, last, submitted} = this.state
    if (first !== '' && last !== '' && submitted === false) {
      this.setState({
        first: '',
        last: '',
        submitted: true,
      })
    } else if (first === '' && last === '' && submitted === true) {
      this.setState({
        submitted: false,
      })
    } else {
      this.onFirstInputBlur()
      this.onLastInputBlur()
    }
  }

  render() {
    const {submitted, first, last, firstBlur, lastBlur} = this.state
    const para = firstBlur ? '' : <p className="requiredPara">Required</p>
    const paras = lastBlur ? '' : <p className="requiredPara">Required</p>
    const redOutline = firstBlur ? '' : 'requiredOutline'
    const redOutlines = lastBlur ? '' : 'requiredOutline'
    const buttonText = submitted ? (
      <div className="subContainer">
        <img
          alt="success"
          className="successImage"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p className="submitPara">Submitted Successfully</p>
        <button className="submitButton" type="submit">
          Submit another Response
        </button>
      </div>
    ) : (
      <div className="subContainer">
        <label htmlFor="first" className="labelInput">
          FIRST NAME
        </label>
        <input
          id="first"
          type="text"
          placeholder="First name"
          className={`inputCls ${redOutline}`}
          value={first}
          onChange={this.inputChangeOne}
          onBlur={this.onFirstInputBlur}
        />
        {para}
        <label htmlFor="first" className="labelInput">
          LAST NAME
        </label>
        <input
          id="first"
          type="text"
          placeholder="Last name"
          className={`inputCls ${redOutlines}`}
          onChange={this.inputChangeTwo}
          value={last}
          onBlur={this.onLastInputBlur}
        />
        {paras}
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    )
    return (
      <div className="main_container">
        <h1 className="mainHeading">Registration</h1>
        <form className="formContainer" onSubmit={this.onFormSubmit}>
          {buttonText}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
