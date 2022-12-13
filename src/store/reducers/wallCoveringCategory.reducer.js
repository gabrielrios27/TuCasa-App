import { WALLCOVERINGCATEGORIES } from '../../constants/data';
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
  categories: WALLCOVERINGCATEGORIES,
  selected: null,
};

const wallCoveringCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex((category) => category.id === action.categoryId);
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default wallCoveringCategoryReducer;