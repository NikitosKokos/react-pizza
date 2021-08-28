import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaPlaceholder } from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
];

const Home = React.memo(() => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

    React.useEffect(() => {
      dispatch(fetchPizzas());
    }, []);
    
    const onSelectCategory = React.useCallback((i) => {
        dispatch(setCategory(i));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames} />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
                    : Array(10).fill(<PizzaPlaceholder />)
                }
            </div>
        </div>
    );
});

export default Home;
