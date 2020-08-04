import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddlware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development'
 ? console.tron.createSagaMonitor()
 : null;

const sagaMiddlware = createSagaMiddlware({
    sagaMonitor
});

const enhancer = process.env.NODE_ENV === 'development'
? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddlware)
)
: applyMiddleware(sagaMiddlware);

const store = createStore(rootReducer, enhancer);

sagaMiddlware.run(rootSaga);

export default store;