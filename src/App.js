import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
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
