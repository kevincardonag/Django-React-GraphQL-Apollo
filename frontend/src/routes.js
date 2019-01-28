import React from 'react';
import { Route , Switch} from 'react-router-dom'


// Component
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import page_404 from './components/page_404'

const AppRouters = () =>
    <App>
        <Switch>
            <route path="/about" component={About}></route>
            <route path="/contact" component={Contact}></route>
            <route path="/home" component={Home}></route>
            <route component={page_404}></route>
        </Switch>
    </App>;

export default AppRouters;