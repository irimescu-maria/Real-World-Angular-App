import { Category } from './../model/category';
import { element } from 'protractor';
import { CategoryService } from './category.service';
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
    constructor(private http: Http,
                private categoryService: CategoryService) {}

    //get all the questions
    getQuestions(): Observable<Question[]> {

        let url = this._serviceUrl;
  
        return Observable.forkJoin(
          this.http.get(url).map<any, Question[]>(res => res.json()), 
          this.categoryService.getCategories())
          .map((combined, index) => {
            let questions: Question[] = combined[0];
            let categories: Category[] = combined[1];
            questions.forEach(q => {
              q.categories = [];
              q.categoryIds.forEach(id => q.categories.push(categories.find(element => element.id == id)))
            })
            return questions;
          })
    }

    saveQuestion(question: Question): Observable<Question> {
      let url = this._serviceUrl;

      return this.http.post(url, question)
              .map(res => res.json());
    }
}