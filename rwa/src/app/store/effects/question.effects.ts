import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { QuestionActions } from "../actions";

import { QuestionService } from "app/services/question.service";

import { Question } from "app/model";

@Injectable()
export class QuestionEffects {
    constructor (
        private actions$: Actions,
        private questionActions: QuestionActions,
        private svc: QuestionService
    ) {}

    @Effect() 
    loadQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_QUESTIONS)
        .switchMap(() => this.svc.getQuestions())
        .map((questions: Question[]) => this.questionActions.loadQuestionsSuccess(questions));

    @Effect() 
    addQuestion$ = this.actions$
        .ofType(QuestionActions.ADD_QUESTION)
        .switchMap((action) => this.svc.saveQuestion(action.payload))
        .map((question: Question) => this.questionActions.addQuestionSuccess(question));
}