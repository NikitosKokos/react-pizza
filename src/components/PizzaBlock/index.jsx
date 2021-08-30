import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const PizzaBlock = ({ id, name, imageUrl, price, types, sizes, addedCount, onClickAddPizza }) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const [currentPrice, setCurrentPrice] = React.useState(price[0]);
    const typeLineRef = React.useRef();
    const sizeLineRef = React.useRef();

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price: currentPrice,
            type: activeType,
            size: activeSize,
        };
        onClickAddPizza(obj);
    }

    const onSelectType = (i) => {
        typeLineRef.current.style.transform = `translateX(${100 * i}%)`;
        setActiveType(i);
    };

    const onSelectSize = (i) => {
        sizeLineRef.current.style.transform = `translateX(${100 * i}%)`;
        setActiveSize(availableSizes[i]);
        setCurrentPrice(price[sizes.indexOf(availableSizes[i])]);
    };

    React.useEffect(() => {
        const typesLineWidth = 100 / availableTypes.length;
        typeLineRef.current.style.width = `${typesLineWidth}%`;
        typeLineRef.current.style.transform = `translateX(${100 * activeType}%)`;

        const sizesLineWidth = 100 / availableSizes.length;
        sizeLineRef.current.style.width = `${sizesLineWidth}%`;
        sizeLineRef.current.style.transform = `translateX(${
            100 * availableSizes.indexOf(activeSize)
        }%)`;
    }, []);

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    <div className="pizza-block__line" ref={typeLineRef}></div>
                    {availableTypes.map((type, i) => (
                        <li
                            key={type}
                            onClick={() => onSelectType(i)}
                            className={classNames({
                                disabled: !types.includes(i),
                            })}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    <div className="pizza-block__line" ref={sizeLineRef}></div>
                    {availableSizes.map((size, i) => (
                        <li
                            key={size}
                            onClick={() => onSelectSize(i)}
                            className={classNames({
                                disabled: !sizes.includes(size),
                            })}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {currentPrice} ₽</div>
                <Button onClick={onAddPizza} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {!!addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    );
};

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    addedCount: PropTypes.number,
    onAddPizza: PropTypes.func,
};

PizzaBlock.defaultProps = {
    types: [],
    sizes: [],
};

export default PizzaBlock;
