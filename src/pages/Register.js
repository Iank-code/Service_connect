import React, { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", {
      firstName,
      lastName,
      email,
      password,
    });
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div>
              <img src="" alt="hand" />
              <div>
                <h3>Offer services</h3>
                <span>Be a Service Provider and Shine!</span>
              </div>
              <div> </div>
            </div>
            <div></div>
            <div></div>

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 1: Personal Information</h2>
            <form>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 2: Account Information</h2>
            <form>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default Register;
