import { TagActions } from './../../store/actions/tag.actions';
import { Store } from '@ngrx/store';
import { CategoryActions } from './../../store/actions/category.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStore } from 'app/store/app-store';
import { QuestionActions } from 'app/store/actions';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  sub: any;

  /**
   *
   */
  constructor(private categoryActions: CategoryActions,
              private tagActions: TagActions,
              private questionActions: QuestionActions,
              private store: Store<AppStore>,
              private router: Router,
              public snackBar: MdSnackBar) { 
                this.sub = store.select(s => s.questionSaveStatus).filter(status => status === "SUCCESS").subscribe(() => {
                  this.snackBar.open("Question saved!", "", {duration: 2000});
                  this.router.navigate(['/questions']);
                })
              }

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(this.tagActions.loadTags());
    this.store.dispatch(this.questionActions.loadQuestions());
  }

  ngOnDestroy() {
    if (this.sub)
    this.sub.unsubscribe();
  }
}
