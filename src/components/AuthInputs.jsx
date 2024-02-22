import { useState } from "react";
import { styled } from "styled-components";

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
 * You can still add properties and className in this styled component.
 * and ALSO set conditionals at component setting level.
 * By convention the styling props are prefixed with an $
 */
const ControlLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;
const ControlInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
          <ControlLabel $invalid={emailNotValid}>Email</ControlLabel>
          <ControlInput
            type="email"
            $invalid={emailNotValid}
            onChange={(event) =>
              handleControlInputChange("email", event.target.value)
            }
          />
        </p>
        <p>
          <ControlLabel $invalid={passwordNotValid}>Password</ControlLabel>
          <ControlInput
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleControlInputChange("password", event.target.value)
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
