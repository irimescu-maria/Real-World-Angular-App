import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { CategoryActions } from "../actions";
import { CategoryService } from "app/services/category.service";
import { Category } from "app/model";
import {AppStore} from '../app-store';

@Injectable()
export class CategoryEffects {

    constructor (
        private actions$: Actions,
        private categoryActions: CategoryActions,
        private svc: CategoryService
    ) {}
@Effect() 
    loadCategories$ = this.actions$
        .ofType(CategoryActions.LOAD_CATEGORIES)
        .switchMap(() => this.svc.getCategories())
        .map((categories: Category[]) => this.categoryActions.loadCategoriesSuccess(categories))
}