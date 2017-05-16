import { Component, OnInit } from '@angular/core';
import { LatestAdventuresService } from '../../services/latest-adventures.service';

import { AllAdventures } from '../../models/allAdventures';
import { Adventure } from '../../models/adventure';

@Component({
  selector: 'app-latest-adventures',
  templateUrl: './latest-adventures.component.html',
  styleUrls: ['../../../../../dist/min.styles.css']
})
export class LatestAdventuresComponent implements OnInit {

  constructor(private latestAdventureService: LatestAdventuresService) {
  }

  ngOnInit(): void {

    this.latestAdventureService.getAdventures()
      .then(this.mapResponse);
  }

  mapResponse(response) {
    console.log(response);
    let allAdventures: AllAdventures = <AllAdventures>response as AllAdventures;
    console.log(allAdventures);
    let currentAllAdventures:any;
    let newAllAdventures = new AllAdventures();
    console.log(newAllAdventures);
    for (const prop in allAdventures) {
      if (allAdventures.hasOwnProperty(prop)) {
        currentAllAdventures = allAdventures;
        //console.log(currentAllAdventures);
        //console.log(newAdventure);
        switch(prop) {
          case 'count':
            newAllAdventures.count = parseInt(currentAllAdventures.count, 10);
              console.log(newAllAdventures.count);
          break;
          default:
            let newAdventure: Adventure = new Adventure();
            newAdventure = allAdventures[prop];
            //newAdventure.ID = allAdventures[prop]['ID'];
            //newAdventure.author = allAdventures[prop]['author'];
            newAllAdventures.adventures.push(newAdventure);
        }  
        ;
        //return newAllAdventures;
      }
    }
    console.log(newAllAdventures)
    return newAllAdventures;
  }

}
