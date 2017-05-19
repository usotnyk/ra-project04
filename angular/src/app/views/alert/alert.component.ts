import { Component, OnInit } from '@angular/core';
import { LatestAdventuresService } from '../../services/latest-adventures.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['../../../../../dist/min.styles.css']
})
export class AlertComponent implements OnInit {

  constructor(
    //private latestAdventureService: LatestAdventuresService
    ) { }

  ngOnInit() {
    //this.latestAdventureService.displaySubmitModal();
  }

}
