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

    let promiseOfAdventures: any = this.latestAdventureService.getAdventures();
    console.log(promiseOfAdventures);
  }

}
