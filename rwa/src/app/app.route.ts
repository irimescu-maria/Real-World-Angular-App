import { Routes } from "@angular/router";
import { CategoryComponent, TagComponent, QuestionComponent } 
  from './components/index';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    {
        path: 'tags',
        component: TagComponent
    },
    {
        path: 'questions',
        component: QuestionComponent
    }
];