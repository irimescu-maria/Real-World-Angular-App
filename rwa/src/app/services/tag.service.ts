import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import '../rxjs-extensions';

import 'rxjs/add/operator/map';
@Injectable()
export class TagService {

    /**
     *
     */
    constructor(private af: AngularFire) {}

    //get all the tags
    getTags(): Observable<string[]> {

        return this.af.database.list('/tagList')
                    .pipe(t => t.map(a => a["$value"]));
    }
}