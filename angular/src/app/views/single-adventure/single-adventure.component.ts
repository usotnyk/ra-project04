import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LatestAdventuresService } from '../../services/latest-adventures.service';
import { Adventure } from '../../models/adventure';

@Component({
  selector: 'app-single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['./single-adventure.component.css']
})
export class SingleAdventureComponent implements OnInit {
  adventures: any;
  currentAdventureToDisplay: Adventure;

  constructor(private route: ActivatedRoute, private service: LatestAdventuresService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.displayAdventure(params['ID']));
  }

  displayAdventure(adventureID: number): void {

    //console.log(adventureID);
    let currentAdventureId = adventureID;
    //console.log(currentAdventureId);
    //this.service.getAdventures().then(adventures => console.log(adventures));
    
    this.service.getAdventures().then(adventures => {
      this.adventures = adventures.adventures;
      //console.log(this.adventures);

      let currentAdventureToDisplay = this.adventures.find(adventure => {
        return adventure.ID == currentAdventureId;
      });

      this.currentAdventureToDisplay = currentAdventureToDisplay;
      //console.log(this.currentAdventureToDisplay);
      return currentAdventureToDisplay;
    });
  }
}
