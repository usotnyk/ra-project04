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

  constructor() { }

  ngOnInit() {
  }

}
