import { Question } from './../model/question';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { AppStore } from 'app/store/app-store';
import { QuestionActions } from 'app/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class QuestionService {

    /**
     *
     */
    constructor(private af: AngularFire,
                private store: Store<AppStore>,
                private questionActions: QuestionActions) {}

    //get all the questions
    getQuestions(): Observable<Question[]> {
        return this.af.database.list('/questions');
    }

    saveQuestion(question: Question) {
        this.af.database.list('/questions').push(question)
            .then( (ret) => {
                this.store.dispatch(this.questionActions.addQuestionSuccess());
            },
                (error: Error) => {
                    //error
                    console.log(error);
                }
            );
    }
}