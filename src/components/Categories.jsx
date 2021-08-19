import classNames from 'classnames';
import React from 'react';

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (i) => {
        setActiveItem(i);
    }

    return (
        <div className="categories">
            <ul>
            <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active': ''}>Все</li>
            { items && items.map((name, i) => (
            <li 
                className={classNames({'active': activeItem === i})}
                onClick={() => onSelectItem(i)} 
                key={`${name}_${i}`}
            >{name}</li>
            )) }
            </ul>
        </div>
    )
}

export default Categories;
