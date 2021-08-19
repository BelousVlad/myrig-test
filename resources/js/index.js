import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`

// ReactDOM
ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)


