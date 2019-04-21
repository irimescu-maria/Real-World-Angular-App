import { TagEffects } from './store/effects/tag.effects';
import { QuestionActions } from './store/actions/question.actions';
import { QuestionEffects } from './store/effects/question.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
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
import { QuestionComponent } from './components/question/question.component';
import { CategoryComponent } from './components/category/category.component';
import { TagService } from './services/tag.service';

import {default as reducer} from './store/app-store';
import { TagActions } from './store/actions';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent,
    QuestionAddUpdateComponent
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

    //DevTools 
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    })
  ],
  providers: [
    //Services
    CategoryService,
    QuestionService,
    TagService,

    //Actions
    CategoryActions,
    QuestionActions,
    TagActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
