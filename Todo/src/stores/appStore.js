import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/constants.js';
import appDispatcher from '../dispatcher/appDispatcher.js';

class AppStore extends ReduceStore {
  constructor() {
    super(appDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new AppStore();