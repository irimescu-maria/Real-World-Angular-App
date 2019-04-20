import { Question } from './../model/question';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionService {

    private _serviceUrl = "  http://localhost:3000/questions";

    /**
     *
     */
    constructor(private http: Http) {}

    //get all the questions
    getQuestions(): Observable<Question[]> {
        let url = this._serviceUrl;

        return this.http.get(url)
                    .map(res => res.json());
    }
}