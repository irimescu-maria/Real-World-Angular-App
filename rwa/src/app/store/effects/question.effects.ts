import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { QuestionActions } from "../actions";

import { QuestionService } from "app/services/question.service";

import { Question } from "app/model";

@Injectable()
export class QuestionEffects {
    constructor(
        private actions$: Actions,
        private questionActions: QuestionActions,
        private svc: QuestionService
    ) { }

    @Effect()
    loadQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_QUESTIONS)
        .switchMap(() => this.svc.getQuestions())
        .map((questions: Question[]) => this.questionActions.loadQuestionsSuccess(questions));


    @Effect()
    loadUnpublishedQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_UNPUBLISHED_QUESTIONS)
        .switchMap(() => this.svc.getUnpublishedQuestions())
        .map((questions: Question[]) => this.questionActions.loadUnpublishedQuestionsSuccess(questions));

    @Effect()
    loadUserQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_USER_QUESTIONS)
        .switchMap((action) => this.svc.getUserQuestions(action.payload))
        .map((questions: Question[]) => this.questionActions.loadUserQuestionsSuccess(questions));

    @Effect()
    loadSampleQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_SAMPLE_QUESTIONS)
        .switchMap(() => this.svc.getSampleQuestions())
        .map((questions: Question[]) => this.questionActions.loadSampleQuestionsSuccess(questions));

    @Effect()
    addQuestion$ = this.actions$
        .ofType(QuestionActions.ADD_QUESTION)
        .do((action) => this.svc.saveQuestion(action.payload))
        .filter(() => false);

    @Effect()
    approveQuestion$ = this.actions$
        .ofType(QuestionActions.APPROVE_QUESTION)
        .do((action) => this.svc.approveQuestion(action.payload))
        .filter(() => false);
}