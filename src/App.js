import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
        setPizzas(data.pizzas);
      });
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home items={pizzas} />
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
