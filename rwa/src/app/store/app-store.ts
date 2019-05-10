import { compose } from '@ngrx/core/compose';
import { Question } from './../model/question';
import { Category } from './../model/category';
import { combineReducers } from '@ngrx/store';
import { categories, questions, questionSaveStatus, unpublishedQuestions, tags, categoryDictionary, user, loginRedirectUrl, userQuestions, sampleQuestions } from './reducers';
import { User } from 'app/model';

export interface AppStore {

    user: User;
    categories: Category[];
    categoryDictionary: {[key: number]: Category};
    tags: string[];
    questions: Question[];
    unpublishedQuestions: Question[];
    userQuestions: Question[];
    sampleQuestions: Question[];
    questionSaveStatus: string;
    loginRedirectUrl: string;
}

export default compose(combineReducers) ({
    user: user,
    categories: categories,
    categoryDictionary: categoryDictionary,
    tags: tags,
    questions: questions,
    unpublishedQuestions: unpublishedQuestions,
    userQuestions: userQuestions,
    sampleQuestions: sampleQuestions,
    questionSaveStatus: questionSaveStatus,
    loginRedirectUrl: loginRedirectUrl
});