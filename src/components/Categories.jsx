import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickItem(null)}
                    className={classNames({ active: activeCategory === null })}>
                    Все
                </li>
                {items &&
                    items.map((name, i) => (
                        <li
                            className={classNames({ active: activeCategory === i })}
                            onClick={() => onClickItem(i)}
                            key={`${name}_${i}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
};

export default Categories;
