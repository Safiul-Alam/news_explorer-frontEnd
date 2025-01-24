
import './ModalWithForm.css';

const ModalWithForm = ({ isOpen, title, closeModal, Children, onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    return (
        <div className={`modal ${isOpen ? 'modal__opened' : ''}`}>
            <div className="modal__content">

                <h2 className="modal__title">{title}</h2>
                <button
                    className="modal__close"
                    type='button'
                    onClick={{ closeModal }}></button>
            </div>

            <form className="modal__form" onSubmit={handleSubmit}>
                {Children}
            </form>

        </div>
    )
}

export default ModalWithForm
