import { Adventure } from './adventure';

export class AllAdventures {
  adventures:Array<Adventure>;
  count:number = 0;

  constructor(adventures:Array<Adventure> = [], count:number = 0) {
    this.adventures = adventures;
    this.count = count;
  }
}