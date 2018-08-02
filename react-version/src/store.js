import {createStore} from 'redux';

const ACTIONS = {
  SET_PASS: "setPassword"
};

const mainStoreReducer = (state = {}, action) => {
  if (action.type === ACTIONS.SET_PASS) {
    state.passwordValue = action.value.passwordValue;
  }
  return state;
};

const mainStore = createStore(mainStoreReducer, {type: ACTIONS.SET_PASS, value: {passwordValue: "stoer"}});

export {ACTIONS, mainStore};
