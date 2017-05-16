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
    let allAdventures: AllAdventures = <AllAdventures>response as AllAdventures;
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
            // newAdventure = allAdventures[prop];
            newAdventure.ID = allAdventures[prop]['ID'];
            newAdventure.author = allAdventures[prop]['author'];
            newAdventure.categories = allAdventures[prop]['categories'];
            newAdventure.content = allAdventures[prop]['content'];
            newAdventure.date = allAdventures[prop]['date'];
            newAdventure.image = allAdventures[prop]['image'];
            newAdventure.title = allAdventures[prop]['title'];
            newAllAdventures.adventures.push(newAdventure);
        }  
      }
    }
    console.log(newAllAdventures);
    return newAllAdventures;
  }

}
