import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import persistState from 'redux-localstorage'
import papayaRepairAppPartner from './reducers/index'

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    persistState(),
)

const store = createStore(papayaRepairAppPartner, enhancer)
export { store }
