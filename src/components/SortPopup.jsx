import classNames from 'classnames';
import React from 'react';

const SortPopup = ({ items }) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef();
    const currentName = items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const onSelectItem = (i) => {
        setActiveItem(i);
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(sortRef.current)){
            setVisiblePopup(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={classNames({'active': visiblePopup})}>
                <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
                />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={toggleVisiblePopup}>{currentName}</span>
            </div>
            <div className={classNames("sort__popup", {'active': visiblePopup})}>
            <ul>
                {items.map((name, i) => (
                <li 
                    className={classNames({'active': activeItem === i})}
                    onClick={() => onSelectItem(i)} 
                    key={`${name}_${i}`}
                >{name}</li>
                )) }
            </ul>
            </div>
        </div>
    )
}

export default SortPopup;
