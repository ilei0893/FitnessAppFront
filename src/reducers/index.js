// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as food } from '../store/utilities/food';
export { default as user } from '../store/utilities/users';
export { default as exercise } from '../store/utilities/exercises'