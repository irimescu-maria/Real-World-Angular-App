import { Question, QuestionStatus } from './../model/question';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { AppStore } from 'app/store/app-store';
import { QuestionActions } from 'app/store/actions';
import { Store } from '@ngrx/store';
import { User } from 'app/model';

@Injectable()
export class QuestionService {

    /**
     *
     */
    constructor(private af: AngularFire,
        private store: Store<AppStore>,
        private questionActions: QuestionActions) { }

    getSampleQuestions(): Observable<Question[]> {
        return this.af.database.list('/questions/published', {
            query: {
                limitToLast: 4
            }
        });
    }

    getUserQuestions(user: User): Observable<Question[]> {
        return this.af.database.list('/users/' + user.userId + '/questions')
            .map((qids: any[]) => {
                let questions: Question[] = [];
                qids.forEach(qid => {
                    this.af.database.object('/questions/' + qid['$value'] + '/' + qid['$key']).take(1)
                        .subscribe(q => {
                            console.log(q);
                            questions.push(q)
                        });
                });
                return questions;
            });
    }

    //get all the questions
    getQuestions(): Observable<Question[]> {
        return this.af.database.list('/questions/published');
    }

    getUnpublishedQuestions(): Observable<Question[]> {
        return this.af.database.list('/questions/unpublished');
    }

    saveQuestion(question: Question) {
        this.af.database.list('/questions/unpublished').push(question)
            .then((ret) => {
                //success
                if (ret.key)
                    this.af.database.object('/users/' + question.created_uid +
                        '/questions').update({ [ret.key]: "unpublished" });
                this.store.dispatch(this.questionActions.addQuestionSuccess());
            },
                (error: Error) => {
                    //error
                    console.log(error);
                }
            );
    }

    approveQuestion(question: Question) {
        let key: string = question["$key"];
        question.status = QuestionStatus.APROVED;
        this.af.database.object('/questions/published').update({ [key]: question })
            .then(
                (ret) => {
                    //success
                    this.af.database.object('/usesr' + question.created_uid +
                        '/questions').update({ [key]: "published" });
                    this.af.database.object('/questions/unpublished/' + key).remove();
                },
                (error: Error) => {
                    //error
                    console.log(error);
                }
            );
    }
}