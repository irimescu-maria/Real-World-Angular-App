import { Question } from './../../model/question';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppStore } from 'app/store/app-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Category } from 'app/model';

@Component({
    selector: 'question-list',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy{

    questionsObs: Observable<Question[]>;
    questions: Question[];
    categoryDictObs: Observable<{[key: number]: Category}>;
    categoryDictionary: {[key: number]: Category};
    sub: any;
    sub2: any;
    /**
     *
     */
    constructor(private store: Store<AppStore>) {
        this.questionsObs = store.select(s => s.questions);
        this.categoryDictObs = store.select(s => s.categoryDictionary);
    }

    ngOnInit() {
        this.sub = this.questionsObs.subscribe(questions => this.questions = questions);
        this.sub2 = this.categoryDictObs.subscribe(cd => this.categoryDictionary = cd);
    }
    ngOnDestroy() {
        if( this.sub)
            this.sub.unsubscribe();
            if (this.sub2)
            this.sub2.unsubscribe();
    }

}  