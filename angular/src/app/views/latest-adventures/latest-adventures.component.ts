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

  allAdventures: AllAdventures;

  constructor(private latestAdventureService: LatestAdventuresService) {
  }

  ngOnInit(): void {
    this.latestAdventureService.getAdventures().then(adventures => {
      this.allAdventures = adventures;
      console.log(adventures);
    });
  }
}
