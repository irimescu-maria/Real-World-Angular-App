import { TagActions } from './../../store/actions/tag.actions';
import { Store } from '@ngrx/store';
import { CategoryActions } from './../../store/actions/category.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStore } from 'app/store/app-store';
import { QuestionActions } from 'app/store/actions';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { User } from 'app/model';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  sub: any;
  user: User;
  title = 'trivia';
  sub2: any;
  /**
   *
   */
  constructor(private categoryActions: CategoryActions,
              private tagActions: TagActions,
              private questionActions: QuestionActions,
              private store: Store<AppStore>,
              private router: Router,
              private authService: AuthenticationService,
              public snackBar: MdSnackBar) { 
                this.sub = store.select(s => s.questionSaveStatus)
                      .subscribe((status) => {
                        if( status === "SUCCESS")
                          this.snackBar.open("Question saved!", "", {duration: 2000});
                        if( status === "IN PROGRESS")
                          this.router.navigate(['/questions']);
                      })

                this.sub2 = store.select(s => s.user).subscribe(user => this.user = user);
              }

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(this.tagActions.loadTags());
    this.store.dispatch(this.questionActions.loadQuestions());
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();

    if (this.sub2)
      this.sub2.unsubscribe();
  }

  login() {
    this.authService.ensureLogin();
  }

  logout() {
    this.authService.logout();
  }
}
