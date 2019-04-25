import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStore } from "app/store/app-store";
import { UserActions } from "app/store/actions";
import { AngularFire } from "angularfire2";
import { MdDialog } from "@angular/material";
import { User } from "app/model";
import { LoginComponent } from "app/components/login/login.component";

@Injectable()
export class AuthenticationService {

    /**
     *
     */
    constructor(private store: Store<AppStore>,
        private userActions: UserActions,
        private af: AngularFire,
        private dialog: MdDialog) {

        this.af.auth.subscribe(user => {
            if (user) {
                //user logged in
                console.log(user);
                console.log(user.auth.providerData[0].displayName + ":" +
                    user.auth.providerData[0].email);
                this.store.dispatch(this.userActions.loginSuccess(new User(user)));
            } else {
                //user not logged in
                this.store.dispatch(this.userActions.logoff());
            }
        });
    }

    ensureLogin = function () {
        if (!this.isAuthenticated)
            this.showLogin();
    };
    showLogin = function () {
        this.dialogRef = this.dialog.open(LoginComponent, {
            disableClose: false
        });
    };
    logout = function () {
        this.af.auth.logout();
    };
    get isAuthenticated(): boolean {
        let user: User;
        this.store.take(1).subscribe(s => user = s.user)
        if (user)
            return true;
        return false;
    };
    get user(): User {
        let user: User;
        this.store.take(1).subscribe(s => user = s.user)
        return user;
    };
}