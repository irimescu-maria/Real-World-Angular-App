import { TagEffects } from './store/effects/tag.effects';
import { QuestionActions } from './store/actions/question.actions';
import { QuestionEffects } from './store/effects/question.effects';
import { AngularFireModule } from 'angularfire2';
import { routes } from './app.route';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './components/app/app.component';
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { CategoryActions } from './store/actions/category.actions';
import { CategoryEffects } from './store/effects/category.effects';
import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';
import { TagComponent } from './components/tag/tag.component';
import { QuestionComponent } from './components/question/questions.component';
import { CategoryComponent } from './components/category/category.component';
import { TagService } from './services/tag.service';

import {default as reducer} from './store/app-store';
import { TagActions, UserActions, UIStateActions } from './store/actions';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { PasswordAuthComponent } from './components/login/password-auth.component';
import { AuthGuard } from './services';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyQuestionsComponent } from './components/question/my-questions.component';
import { AdminQuestionsComponent } from './components/admin/admin-questions.component';
import { UserEffects } from './store/effects';

export const firebaseConfig = {
  apiKey: "AIzaSyBzNTYv2oy8o6de_B5EzQ8AYb7shhXfgVU",
  authDomain: "rwa-trivia-566e5.firebaseapp.com",
  databaseURL: "https://rwa-trivia-566e5.firebaseio.com",
  projectId: "rwa-trivia-566e5",
  storageBucket: "rwa-trivia-566e5.appspot.com",
  messagingSenderId: "482432342832",
  appId: "1:482432342832:web:7e7e820cfafabc62"
};

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent,
    QuestionAddUpdateComponent,
    LoginComponent,
    PasswordAuthComponent,
    AdminComponent,
    DashboardComponent,
    MyQuestionsComponent,
    AdminQuestionsComponent
  ],
  entryComponents: [
    LoginComponent,
    PasswordAuthComponent
  ],
  imports: [
    BrowserModule,

    //Forms
    FormsModule,
    ReactiveFormsModule,

    HttpModule,

    //Router
    RouterModule.forRoot(routes),

    //Material
    MaterialModule.forRoot(),
    //Flex
    FlexLayoutModule.forRoot(),

    //Store
    StoreModule.provideStore(reducer),

    //Effects 
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(QuestionEffects),
    EffectsModule.run(TagEffects),
    EffectsModule.run(UserEffects),

    //DevTools 
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    //Firebase
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    //Services
    CategoryService,
    QuestionService,
    TagService,
    AuthenticationService,
    AuthGuard,

    //Actions
    CategoryActions,
    QuestionActions,
    TagActions,
    UserActions,
    UIStateActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
