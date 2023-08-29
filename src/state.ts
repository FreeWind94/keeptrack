import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk"

const reduser = combineReducers({});

export default function configureStore(preloadedState: any) {
    const middlewares = [ReduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    // Thunk is middlemare
    // DevTools is enhancer (actually changes Redux)
    // applyMiddleware wraps middlemare and returns ah enhancer

    // to use only thunk middleware
    // const enhancer = compose(middlewareEnhancer);

    // to use thunk & devTools
    const enhancer = composeWithDevTools(middlewareEnhancer);

    const store = createStore(reduser, preloadedState, enhancer);
    return store;
}

export interface AppState{}

export const initialAppState: AppState = {};

export const store = configureStore(initialAppState);