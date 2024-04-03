import React, { useState } from 'react';
import '../Style/VerificationPhoneNumber.css';

const VerificationPhoneNumber = () => {
  const [code, setCode] = useState(new Array(4).fill(''));

  const handleChange = (element, index) => {
    if(isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Combine the code array and process the full verification code
    const verificationCode = code.join('');
    console.log(verificationCode);
    // Submit the verification code
  };

  return (
    <div className="verificationFormContainer">
      <form onSubmit={handleSubmit} className="verificationForm">
        <h2>Verify Your Number</h2>
        <p>We've sent a 4-digit verification code to your phone. Please enter the code below to complete the process.</p>
        <div className="inputContainer">
          {code.map((data, index) => {
            return (
              <input
                className="codeBox"
                type="text"
                key={index}
                value={data}
                maxLength={1}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        <p className="resend">
          Didn't receive a code?<button type="button" className="resendButton">Click to resend</button>
        </p>
        <button type="submit" className="verifyButton">Verify Now</button>
      </form>
    </div>
  );
};

export default VerificationPhoneNumber;
