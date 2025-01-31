import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './RegisterModal.css';

function RegisterModal({ isOpen, closeModal, navigateToLogin, handleSignUp }) {
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const form = input.closest("form");
    const inputs = Array.from(form.querySelectorAll('input'));
    const valid = inputs.every((input) => input.validity.valid);
    setIsValid(valid);
  }

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={handleSignUp}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          required
          placeholder="example@test.com"
          name="email"
          onChange={handleChange}
          aria-describedby="email-error"
        ></input>
        {/* {!isValid && <span id="email-error" className="modal__error">Please enter a valid email address.</span>} */}
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          required
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          aria-describedby="password-error"
        ></input>
        {/* {!isValid && <span id="password-error" className="modal__error">Please enter a valid password.</span>} */}
      </label>
      
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="name"
          className="modal__input"
          id="name"
          required
          placeholder="Enter your username"
          name="username"
          onChange={handleChange}
          aria-describedby="username-error"
        ></input>
        {/* {!isValid && <span id="username-error" className="modal__error">Please enter a valid username.</span>} */}
      </label>

      <button
        type="submit"
        className={`modal__sign-in-button ${isValid ? 'button__active' : ''}`}
        disabled={!isValid}
      >
        Sign up
      </button>

      <div className="modal__alt-button">
        <p>or</p>
        <button
          type="button"
          to="login"
          className="modal__sign-up-button"
          onClick={navigateToLogin}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;