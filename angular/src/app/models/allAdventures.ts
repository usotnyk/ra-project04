import { Adventure } from './adventure';

export class AllAdventures {
  adventures:Adventure[];

  constructor(adventures:Adventure[] = []) {
    this.adventures = adventures;
  }
}