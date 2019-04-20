import { QuestionService } from './../../services/question.service';

import { Question } from './../../model/question';
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'question-list',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy{

    questions: Question[];
    sub: any;

    /**
     *
     */
    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.sub = this.questionService.getQuestions()
                        .subscribe(questions => this.questions = questions);
    }
    ngOnDestroy() {
        if( this.sub)
            this.sub.unsubcribe();
    }

}  