import MOCKED_STORE from './constants';

class LocalStore {
  static getState() {
    const stringifiedState = localStorage.getItem('chat-app-store');
    if (stringifiedState === null) {
      return MOCKED_STORE;
    }
    return JSON.parse(stringifiedState);
  }

  static setState(state) {
    localStorage.setItem('chat-app-store', JSON.stringify(state));
  }

}

export default LocalStore;
