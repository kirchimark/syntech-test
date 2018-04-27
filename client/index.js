import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore,  combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory';
import {Route, Switch } from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware, push, goBack} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'


import reducers from './reducers';
import Stepper from './components/stepper';


const history = createHistory();
const routerMiddle = routerMiddleware(history)


let AppReducers = combineReducers({
    ...reducers,
    form: formReducer,
    router: routerReducer,
});

let store = createStore(AppReducers, compose(applyMiddleware(routerMiddleware(history))));

class Layout extends React.Component {
    render() {
        return (<ConnectedRouter history={history}>
                <Switch>
                  <Route path='/' component={Stepper} />
                </Switch>
            </ConnectedRouter>)
    }
}

const LayoutRedux = connect((state) => ({}) ,(dispatch) => ({}))(Layout)

ReactDOM.render(
        <Provider store={store}>
            <LayoutRedux />
        </Provider>,
document.getElementById('app'));
