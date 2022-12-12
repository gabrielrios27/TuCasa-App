import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer, floorCategoryReducer, floorProductsReducer, orderReducer, wallCoveringCategoryReducer } from './reducers';

const rootReducer = combineReducers({
  floorProducts: floorProductsReducer,
  floorCategory: floorCategoryReducer,
  wallCoveringCategories: wallCoveringCategoryReducer,
});

export default createStore(rootReducer);
