import { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "./styled-components/StyledInput";

/*
 * Will created a div as a STYLED component
 * Back tick => Tagged template or template literals (see mdm).
 */
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

/*
 * How to handle the pseudo selectors.
 */
const ControlButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <CustomInput
            label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <CustomInput
            label="Password"
            type="password"
            invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <ControlButton className="button" onClick={handleLogin}>
          Sign In
        </ControlButton>
      </div>
    </div>
  );
}
