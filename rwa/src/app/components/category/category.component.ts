import { CategoryService } from './../../services/category.service';
import { Category } from './../../model/category';
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'category-list',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy{


    //Properties
    categories: Category[];
    sub:any;

    /**
     *
     */
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.sub = this.categoryService.getCategories()
                        .subscribe(categories => this.categories = categories);
    }

    ngOnDestroy() {
        if(this.sub) 
            this.sub.unsubscribe();
    }
}