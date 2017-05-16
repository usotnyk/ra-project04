import { Adventure } from './adventure';

export class AllAdventures {
  adventures:Adventure[];
  count:number = 0;

  constructor(adventures:Adventure[] = [], count:number = 0) {
    this.adventures = adventures;
    this.count = count;
  }
}