import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
      axios.get('http://localhost:3001/pizzas').then(({ data }) => {
          dispatch(setPizzas(data));
      });
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
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
