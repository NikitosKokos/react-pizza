import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
    const dispatch = useDispatch();
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);
    
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home category={category} sortBy={sortBy} />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
