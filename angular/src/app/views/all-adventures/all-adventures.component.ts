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
  adventures: Array<Adventure>;
  adventuresSlice: Array<Adventure> = [];
  loadMoreButton: boolean = false;

  adventuresPageDisplayLimit:number = 5;

  constructor(private service: LatestAdventuresService) { }

  ngOnInit() {
    this.loadAdventures().then(this.displayAdventures.bind(this));
    document.body.scrollTop = 0;
  }

  loadAdventures(): Promise<any> {
    return this.service.getAdventures();
  }

  displayAdventures(adventures) {
    this.adventures = adventures.adventures;
    this.displayMoreAdventures();
  }

  displayMoreAdventures() {
    const lastAdventuresIndex = this.adventuresSlice.length;
    let nextAdventuresIndex = lastAdventuresIndex + this.adventuresPageDisplayLimit;

    if (this.adventures.length <= nextAdventuresIndex) {
      nextAdventuresIndex = this.adventures.length;
      this.loadMoreButton = false;
    } else {
      this.loadMoreButton = true;
    }

    this.adventuresSlice = this.adventures.slice(0, nextAdventuresIndex);
  }

  trackByAdventures(index: number, adventure: Adventure): number { 
    return adventure.ID; 
  }
}
