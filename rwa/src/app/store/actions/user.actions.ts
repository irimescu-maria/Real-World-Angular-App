import {User} from '../../model';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

@Injectable()
export class UserActions {

    static LOGOFF = 'LOGOFF';
    logoff(): Action {
        return {
            type: UserActions.LOGOFF,
            payload: null
        };
    }

    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  loginSuccess(user: User): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: user
    };
  }
}