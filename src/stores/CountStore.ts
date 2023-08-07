import { IRootStore } from "./RootStore";
import { action, makeObservable, observable, computed } from "mobx";

export class CountStore {
  count: number = 1;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      getCountValue: computed,
    });
    this.rootStore = rootStore;
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  get getCountValue() {
    return this.count;
  }
}
