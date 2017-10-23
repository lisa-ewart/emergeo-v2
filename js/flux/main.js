import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import App from '../components/App';


import { actions } from './actions';
import { store } from './store';

export default class Main extends Component {
    state = store;

    dispatch(actionName, options) {
        const actionToDo = actions[actionName];
        actionToDo(this.state, options).then(newStore => this.setState(newStore))
    };

    render() {
        const allProps = {
            dispatch: (...args) => this.dispatch(...args),
        };

        return <App {...this.state} {...allProps} />
    }
}