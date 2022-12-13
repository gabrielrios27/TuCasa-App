import { combineReducers, createStore } from 'redux';
import { floorCategoryReducer, floorProductsReducer, wallCoveringCategoryReducer, wallCoveringProductsReducer } from './reducers';

const rootReducer = combineReducers({
  floorProducts: floorProductsReducer,
  floorCategory: floorCategoryReducer,
  wallCoveringCategories: wallCoveringCategoryReducer,
  wallCoveringProducts: wallCoveringProductsReducer,
});

export default createStore(rootReducer);
