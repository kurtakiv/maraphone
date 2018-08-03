import {createStore} from 'redux';

const ACTIONS = {
  SET_PASS: "setPassword",
  SET_IS_AUTHORIZED: "setAuthorized"
};

const mainStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SET_PASS:
      state.value.passwordValue = action.value.passwordValue;
      return Object.assign({}, state);
    case ACTIONS.SET_IS_AUTHORIZED:
      state.value.isAuthorized = action.value.isAuthorized;
      return Object.assign({},state);
    default: return state;
  }
};

const mainStore = createStore(mainStoreReducer, {type: ACTIONS.SET_PASS, value: {passwordValue: "", isAuthorized: true}});

export {ACTIONS, mainStore};
