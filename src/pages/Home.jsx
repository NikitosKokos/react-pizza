import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaPreloader } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = React.memo(() => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);
    
    const onSelectCategory = React.useCallback((i) => {
        dispatch(setCategory(i));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [],);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj));
    }

    const getAddedCount = (id, types, sizes) => {
        return types.reduce((count, type) => {
            sizes.forEach(size => {
                if(cartItems[`${id}-${type}-${size}`]){
                    count += cartItems[`${id}-${type}-${size}`].length;
                };
            });
            return count;
        }, 0);
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((item) => (
                          <PizzaBlock
                              onClickAddPizza={handleAddPizzaToCart}
                              key={item.id}
                              addedCount={getAddedCount(item.id, item.types, item.sizes)}
                              {...item}
                          />
                      ))
                    : Array(10)
                          .fill(0)
                          .map((_, i) => <PizzaPreloader key={i} />)}
            </div>
        </div>
    );
});

export default Home;
