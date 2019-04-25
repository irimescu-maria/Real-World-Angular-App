import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { UserActions } from "../actions";
import { User } from "../../model";
import "../../rxjs-extensions";

export const user = (state: any = null, action: Action): User => {
    switch (action.type) {
        case UserActions.LOGIN_SUCCESS:
          return action.payload;
        case UserActions.LOGOFF:
          return null;
        default:
          return state;
    }
};