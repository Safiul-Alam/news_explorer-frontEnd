import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = () => {
    return (
        <ModalWithForm>
            <label htmlFor="email" className="modal__label">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="modal__input"
                placeholder="your email"
                required
            />

            <label
                htmlFor="password"
                id="password"
                name="password"
                className="modal__label"
                placeholder="password here"
                required
            >
                Password
            </label>

            <button className="modal__sign-in-button">Sign in</button>

            <div className="modal__alt-button">
                <p>or</p>
                <button className="modal__sign-up-button"></button>
            </div>
        </ModalWithForm>
    );
};

export default LoginModal;
