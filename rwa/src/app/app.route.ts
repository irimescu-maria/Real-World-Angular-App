import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';
import { Routes } from "@angular/router";
import { CategoryComponent, TagComponent, QuestionComponent, MyQuestionsComponent } 
  from './components/index';
import { AuthGuard } from './services';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminQuestionsComponent } from './components/admin/admin-questions.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'questions',
        component: MyQuestionsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'question/add',
        component: QuestionAddUpdateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        data: { roles: ["admin"] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DashboardComponent
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
                component: AdminQuestionsComponent
            }
        ]
    }
];