import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import {state as initialState} from './state';

const {contextPsAccounts, psGoogleShoppingApiUrl}: any = window;

const state = Object.assign(
  contextPsAccounts || {},
  psGoogleShoppingApiUrl || '',
  {...initialState},
);

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};