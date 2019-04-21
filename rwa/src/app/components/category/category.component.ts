import { CategoryService } from './../../services/category.service';
import { Category } from './../../model/category';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AppStore } from 'app/store/app-store';
import { Store } from '@ngrx/store';

@Component({
    selector: 'category-list',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy{


    //Properties
    categories: Category[];
    categoriesObs: Observable<Category[]>;
    sub:any;

    /**
     *
     */
    constructor(private store: Store<AppStore>) {
        this.categoriesObs = store.select(s=>s.categories);
    }

    ngOnInit() {
        this.sub = this.categoriesObs
                        .subscribe(categories => this.categories = categories);
    }

    ngOnDestroy() {
        if(this.sub) 
            this.sub.unsubscribe();
    }
}