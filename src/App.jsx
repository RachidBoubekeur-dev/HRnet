import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/dumb/Header';
import { Create } from './containers/Create';
import { List } from './containers/List';
import { Footer } from './components/dumb/Footer';
import './App.css';

export const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3100);
    }, []);
    return (
        <div className="App">
            {loading && (
                <div className="loading">
                    <div>{/*Logo loading */}</div>
                    <div>
                        <p>{/*Bar loading */}</p>
                    </div>
                </div>
            )}
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/employee-list" exact>
                            <List />
                        </Route>
                        <Route path="/">
                            <Create />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
};
