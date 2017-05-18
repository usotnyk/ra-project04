import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AllAdventures } from '../models/allAdventures';
import { Adventure } from '../models/adventure';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LatestAdventuresService {

  getAdventuresUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";
  postAdventuresUrl = "http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2";

  adventures: AllAdventures = null;

  constructor(private http: Http) { }

  getAdventures(): Promise<AllAdventures> {
    if (this.adventures != null) {
      return new Promise((resolve, reject) => {
        resolve(this.adventures);
      });
    }

    let getAdventuresPromise: any = this.http.get(this.getAdventuresUrl).toPromise();

    let resolvedPromise: Promise<AllAdventures> = Promise.resolve(
      getAdventuresPromise.then(response => {
        let adventures = this.mapResponse(response);
        this.adventures = adventures;
        return adventures;
      }
    )
    .catch( error => { console.log(error) } ));
    
    return resolvedPromise;
  }

  mapResponse(response) {
    let allAdventures: AllAdventures = <AllAdventures>response.json() as AllAdventures;
    let currentAllAdventures:any;
    let newAllAdventures = new AllAdventures();
    for (const prop in allAdventures) {
      if (allAdventures.hasOwnProperty(prop)) {
        currentAllAdventures = allAdventures;
        switch(prop) {
          case 'count':
            newAllAdventures.count = parseInt(currentAllAdventures.count, 10);
          break;
          default:
            let newAdventure: Adventure = new Adventure();
            newAdventure.ID = allAdventures[prop]['ID'];
            newAdventure.author = allAdventures[prop]['author'];
            newAdventure.categories = allAdventures[prop]['categories'];
            newAdventure.content = allAdventures[prop]['content'];
            newAdventure.date = allAdventures[prop]['date'];
            newAdventure.title = allAdventures[prop]['title'];
            if (allAdventures[prop]['image'] == false) {
              newAdventure.image = 'http://www.fitworx.com/wp-content/uploads/2016/10/sorry-image-not-available.png'
            } else {
              newAdventure.image = allAdventures[prop]['image'];
            }
            newAllAdventures.adventures.push(newAdventure);
        }  
      }
    }

    return newAllAdventures;
  }

postAdventures(): any {
  console.log("post method is posting!");
}

}
