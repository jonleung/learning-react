import MOCKED_STORE from './constants';

class LocalStore {
  static getState() {
    const stringifiedState = localStorage.getItem('todo-app-store');
    if (stringifiedState === null) {
      return MOCKED_STORE;
    }
    return JSON.parse(stringifiedState);
  }

  static setState(state) {
    localStorage.setItem('todo-app-store', JSON.stringify(state));
  }

}

export default LocalStore;
