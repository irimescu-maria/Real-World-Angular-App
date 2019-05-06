import { Category } from './../model/category';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';
import 'rxjs/add/operator/map';
import { AngularFire } from 'angularfire2';

@Injectable()
export class CategoryService {



    /**
     *
     */
    constructor(private af: AngularFire) {}

    //get all categories
    getCategories(): Observable<Category[]> {
       return this.af.database.list('/categories');
    }
}