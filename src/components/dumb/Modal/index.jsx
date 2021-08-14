import './modal.css';

/**
 * Modal component dumb
 */
export const Modal = (props) => {
    return (
        <div className="Modal">
            <div>
                <span onClick={() => props.setModal(false)}>x</span>
                <p>Employee Created !</p>
            </div>
        </div>
    );
};
