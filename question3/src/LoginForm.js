import React, { useState } from 'react';
import './LoginForm.css';
import logo from './google-icon.svg'
import close from './cross.png'

const LoginForm = () => {
    const defaultMessage = 'Email or Mobile Number'
    const successMessage = 'All Good!'
    const failureMessageEmail = 'Please Enter a valid Email'
    const failureMessageMobile = 'Please Enter a valid Mobile Number'
    const mobilePattern = /^[0-9]+$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const [inputLabel, setInputLabel] = useState(defaultMessage)
    const [inputValue, setInputValue] = useState('')
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
    const [isAlertActive, setIsAlertActive] = useState(false)

    const isMobileNumber = (val) => mobilePattern.test(val)
    const isValidEmail = (val) => emailPattern.test(val)
    const isValidMobileNumber = (val) => isMobileNumber(val) && val.length === 10

    const resetForm = () => {
        setInputValue('')
        setInputLabel(defaultMessage)
        setIsSubmitDisabled(true)
        setIsAlertActive(false)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        const input = e.target.value.trim()

        if (input.length === 0) {
            setInputLabel(defaultMessage)
            setIsSubmitDisabled(false)
            return
        }

        if (isMobileNumber(input)) {
            if (isValidMobileNumber(input)) {
                setInputLabel(successMessage)
                setIsSubmitDisabled(false)
            } else {
                setInputLabel(failureMessageMobile)
                setIsSubmitDisabled(true)
            }
        } else {
            if (isValidEmail(input)) {
                setInputLabel(successMessage)
                setIsSubmitDisabled(false)
            } else {
                setInputLabel(failureMessageEmail)
                setIsSubmitDisabled(true)
            }
        }
    }

    return (
        <div className="container">
            {
                !isAlertActive && 
                <div className="loginContainer">
                    <h2>Login to Dashboard</h2>
                    <label className='label' htmlFor="input">{inputLabel}</label>
                    <input type="text" value={inputValue} onChange={handleInputChange} id='input' />
                    <button className='submitButton' disabled={isSubmitDisabled} onClick={() => setIsAlertActive(true)}>Next</button>
                    <p className='or'>or</p>
                    <button className='googleButton'>
                        <img src={logo} alt="Google Logo" /> <span>Sign in with Google</span>
                    </button>
                    <div className="footer">
                        <p className='footerP1'>Protected by reCAPTCHA. Google</p>
                        <p><a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a> apply.</p>
                    </div>
                </div>
            } {
                !isAlertActive &&
                <div className="desktop-footer">
                    <p className='desktop-footerP1'>Protected by reCAPTCHA. Google</p>
                    <p><a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a> apply.</p>
                </div>
            } {
                isAlertActive &&
                <div className="loginContainer">
                    <h3 className='alertHeading'>All Good!</h3>
                    <img className='closeButton' onClick={resetForm} src={close} alt="close-btn" />
                </div>
            }
            <div className="backgroundContainer">
                <p className='contact'>Need help? <a href="#">Contact Us</a></p>
            </div>
        </div>
    );
};

export default LoginForm;
