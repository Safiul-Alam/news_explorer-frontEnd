
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import '../RegisterModal/RegisterModal.css';

function LoginModal({
    isOpen,
    closeModal,
    navigateToSignUp,
    handleLoginSubmit,
}) {
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
            title="Sign in"
            isOpen={isOpen}
            closeModal={closeModal}
            onSubmit={handleLoginSubmit}
        >
            <label htmlFor="email" className="modal__label">
                Email
                <input
                    type="email"
                    className="modal__input"
                    id="email"
                    required
                    placeholder="Enter email"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    onChange={handleChange}
                    aria-describedby="email-error"
                ></input>
                {/* <span id="email-error" className="modal__error">Please enter a valid email address.</span> */}
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
                {/* {!isValid &&  <span id="password-error" className="modal__error">Please enter a valid password.</span>} */}

            </label>
            <button
                type="submit"
                className="modal__sign-in-button"
                disabled={!isValid}
            >
                Sign in
            </button>
            <div className="modal__alt-button">
                <p>or</p>
                <button
                    type="button"
                    to="register"
                    className="modal__sign-up-button"
                    onClick={navigateToSignUp}
                >
                    Sign up
                </button>
            </div>
        </ModalWithForm>
    );
}

export default LoginModal;