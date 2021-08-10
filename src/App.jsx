import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="App">
            {loading && (
                <div className="loading">
                    <p>loading</p>
                </div>
            )}
            <Router>
                {/* <Header /> */}
                <main>
                    <Switch>
                        <Route path="/employee-list" exact>
                            {/* <Employee/> */}
                        </Route>
                        <Route path="/">{/* <Home/> */}</Route>
                    </Switch>
                </main>
                {/* <Footer/> */}
            </Router>
        </div>
    );
};
