import { Action } from '@ngrx/store';
import { Category } from '../../model/category';
import { CategoryActions } from '../actions';
export const categories = (state: any = [], action: Action): Category[] => {
    switch (action.type){
        case CategoryActions.LOAD_CATEGORIES_SUCCESS:
        return action.payload;
      default:
        return state;
    }
};

export const categoryDictionary = (state: any = {}, action: Action): {[key: number]: Category} => {
  switch (action.type) {
    case CategoryActions.LOAD_CATEGORIES_SUCCESS:
      let categories: Category[] = action.payload;
      let categoryDict: {[key: number]: Category} = {};
      categories.forEach(category => {
        categoryDict[category.id] = category;
      });
      return categoryDict;
    default:
      return state;
  }
};