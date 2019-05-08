import { compose } from '@ngrx/core/compose';
import { Question } from './../model/question';
import { Category } from './../model/category';
import { combineReducers } from '@ngrx/store';
import { categories, questions, questionSaveStatus, tags, categoryDictionary, user } from './reducers';
import { User } from 'app/model';

export interface AppStore {
    categories: Category[];
    categoryDictionary: {[key: number]: Category};
    questions: Question[];
    questionSaveStatus: string;
    tags: string[];
    user: User;
}

export default compose(combineReducers) ({
    categories: categories,
    categoryDictionary: categoryDictionary,
    questions: questions,
    questionSaveStatus: questionSaveStatus,
    tags: tags,
    user: user
});