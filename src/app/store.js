import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import CounterReducer from "./features/CounterFeatures/reducer";

let rootReducer = combineReducers({
    counter: CounterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
