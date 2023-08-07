import { CartStore } from "./CartStore";
import { CountStore } from "./CountStore";

export interface IRootStore {
  countStore: CountStore;
  cartStore: CartStore;
}

export class RootStore implements IRootStore {
  countStore: CountStore;
  cartStore: CartStore;

  constructor() {
    this.countStore = new CountStore(this);
    this.cartStore = new CartStore(this);
  }
}
