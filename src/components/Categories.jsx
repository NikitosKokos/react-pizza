import classNames from 'classnames';
import React from 'react';

const Categories = React.memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (i) => {
        setActiveItem(i);
        onClickItem(i);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={classNames({ active: activeItem === null })}>
                    Все
                </li>
                {items &&
                    items.map((name, i) => (
                        <li
                            className={classNames({ active: activeItem === i })}
                            onClick={() => onSelectItem(i)}
                            key={`${name}_${i}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default Categories;
