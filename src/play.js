import { createStore, applyMiddleware, compose } from 'redux';

const logger = store => next => action => {
  const oldState = store.getState();
  console.log('dispatching', action);

  next(action);

  const newState = store.getState();
  if(oldState !== newState) console.log('update', newState);
};

function reducer(state = {}, action) {
  return state;
}

const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger))
);

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger))
);

store.dispatch({ type: 'hi' });
