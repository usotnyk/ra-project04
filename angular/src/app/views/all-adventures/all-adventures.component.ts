import { Component, OnInit } from '@angular/core';
import { LatestAdventuresService } from '../../services/latest-adventures.service';

import { AllAdventures } from '../../models/allAdventures';
import { Adventure } from '../../models/adventure';

@Component({
  selector: 'app-all-adventures',
  templateUrl: './all-adventures.component.html',
  styleUrls: ['../../../../../dist/min.styles.css']
})
export class AllAdventuresComponent implements OnInit {
  adventures: any;

  constructor(private service: LatestAdventuresService) { }

  ngOnInit() {
    this.displayAllAdventures();
  }

  displayAllAdventures(): void {
    
    this.service.getAdventures().then(adventures => {
      this.adventures = adventures.adventures;
      console.log(this.adventures);
      return this.adventures;
    });

  }

}
