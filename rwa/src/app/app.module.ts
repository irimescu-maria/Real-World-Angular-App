import { TagComponent } from './components/tag/tag.component';
import { QuestionComponent } from './components/question/question.component';
import { CategoryComponent } from './components/category/category.component';
import { TagService } from './services/tag.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //Router
    RouterModule.forRoot(routes)
  ],
  providers: [
    //Services
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
