import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ title, callBack, onClose }) => {
    const popupRef = React.useRef();

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());

        if (!path.includes(popupRef.current)) {
            onClose();
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleCallBack = () => {
        callBack();
        onClose();
    }

    const hanldeClose = () => {
        onClose();
    }

    return (
        <div ref={popupRef} className="popup">
            <div className="popup__content">
                <div className="popup__title">{title}</div>
                <div className="popup__buttons">
                    <button onClick={handleCallBack} className="popup__btn popup__btn_open">
                        OK
                    </button>
                    <button onClick={hanldeClose} className="popup__btn popup__btn_close">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    callBack: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Popup;
