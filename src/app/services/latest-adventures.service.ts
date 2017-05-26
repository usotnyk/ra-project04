import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AllAdventures } from '../models/allAdventures';
import { Adventure } from '../models/adventure';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LatestAdventuresService {

  adventures: AllAdventures = null;

  //private getAdventuresUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";
  private getAdventuresUrl = "https://www.edapostol.com/proxy/proxy.php?url=http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

  private postUrl = "https://www.edapostol.com/proxy/proxy.php?url=http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2";

  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(private http: Http) { }

  getAdventures(): Promise<AllAdventures> {
    if (this.adventures != null) {
      return new Promise((resolve, reject) => {
        resolve(this.adventures);
      });
    }

    let getAdventuresPromise: any = this.http.get(this.getAdventuresUrl).toPromise();

    let resolvedPromise: Promise<AllAdventures> =
    
    Promise.resolve(getAdventuresPromise)
      .then(response => {
        let adventures = this.mapResponse(response);
        this.adventures = adventures;
        return adventures;
      })
      .catch(error => console.log(error));
    
    return resolvedPromise;
  }

  mapResponse(response) {
    //let allAdventures: AllAdventures = <AllAdventures>response.json() as AllAdventures;
    let allAdventuresObj: any = <AllAdventures>response.json() as AllAdventures;

    let allAdventures: AllAdventures= allAdventuresObj.contents;
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
            newAdventure.content = allAdventures[prop]['content'].replace(/&#039;/g, `'`);
            newAdventure.date = allAdventures[prop]['date'];
            newAdventure.title = allAdventures[prop]['title'].replace(/&#039;/g, `'`);
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

  postAdventures(parameters): any {
    let postUrl = this.postUrl + "?params=" + parameters;
    console.log(parameters);
    console.log(postUrl);

    let handleError: any = error => { 
      console.log(error) 
    };

    let postProcess = this.http.post(postUrl, parameters, this.headers)
      .toPromise()
      //.then(response => console.log(response))
      .then(response => {
        let serverResponse = response;
        console.log(serverResponse);
        return serverResponse;
      })
      .catch(handleError);

    //let getPostPromise = postProcess
    let resolvedPostPromise = Promise.resolve(postProcess);
    return resolvedPostPromise;
  }

  // displaySubmitModal() {
  //   console.log("success! pop up should be displayed");

  // }

}
