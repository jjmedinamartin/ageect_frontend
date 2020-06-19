import { createStore } from 'redux';

const initialState = {
    projects: [],
};


export const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());