import React from 'react';
import { Provider } from 'react-redux';

import FollowBand from './followBand/FollowBand.jsx';
import FollowList from './followList/followList.jsx';
import Footer from './footer/Footer.jsx';
import Header from './header/Header.jsx';
import store from '../store';

import './appRoot.scss';
import '../../lib/bootstrap/css/bootstrap.css';
import '../../lib/bootstrap/css/bootstrap-flat.css';

const TodoApp = () => (
    <div>
        <Header />
        <div className="tour-alert">
            <FollowBand />
            <FollowList />
        </div>
        <Footer />
    </div>
);

export default (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)