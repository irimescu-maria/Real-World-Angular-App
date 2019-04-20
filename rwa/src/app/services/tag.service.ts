import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {

    private _serviceUrl = 'http://localhost:3000/tagList';

    /**
     *
     */
    constructor(private http: Http) {}

    //get all the tags
    getTags(): Observable<string[]> {
        let url = this._serviceUrl;

        return this.http.get(url)
                    .map(res => res.json());
    }
}