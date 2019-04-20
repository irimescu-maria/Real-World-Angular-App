import { Category } from './../model/category';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    private _serviceUrl = "http://localhost:3000/categories";

    /**
     *
     */
    constructor(private http: Http) {}

    //get all categories
    getCategories(): Observable<Category[]> {
        let url = this._serviceUrl;
        return this.http.get(url)
                    .map(res => res.json());
    }
}