import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { TagActions } from "../actions";

import { TagService } from "app/services/tag.service";

@Injectable()
export class TagEffects {
    constructor (
        private actions$: Actions,
        private tagActions: TagActions,
        private svc: TagService
    ) {}

    @Effect() 
    loadTags$ = this.actions$
        .ofType(TagActions.LOAD_TAGS)
        .switchMap(() => this.svc.getTags())
        .map((tags: string[]) => this.tagActions.loadTagsSuccess(tags))

}