import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LatestAdventuresService {

  adventuresUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

  constructor(private http: Http) { }

  getAdventures():Promise<any> {
    //console.log("inside getAdventures");
    let newPromise: any = this.http.get(this.adventuresUrl)
    .toPromise()
    .then( response => {return response.json();} )
    .catch( error => {console.log(error)} );
    
    return newPromise;
  }
}
