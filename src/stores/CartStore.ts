import { computed, makeObservable, observable, action } from "mobx";
import { Cart, Product } from "../models";
import { IRootStore } from "./RootStore";

export class CartStore {
  carts: Cart[] = [];
  rootStore: IRootStore;
  isDisabled: boolean = false;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      carts: observable,
      isDisabled: observable,
      getCarts: computed,
      addTocart: action,
      deleteCart: action,
      sumCart: computed,
      decrement: action,
      increment: action,
    });

    this.rootStore = rootStore;
  }

  addTocart = (product: Product) => {
    const index = this.carts.findIndex((cart) => cart.id === product.id);
    if (index >= 0) {
      this.carts[index].cartQuantity += 1;
    } else {
      const tempProduct = { ...product, cartQuantity: 1 };
      this.carts.push(tempProduct);
    }
  };

  deleteCart = (productId: number) => {
    this.carts = this.carts.filter((cart) => cart.id !== productId);
  };

  increment = (product: Product) => {
    const index = this.carts.findIndex((cart) => cart.id === product.id);

    if (index >= 0) {
      this.carts[index].cartQuantity += 1;
    }

    if (this.carts[index].cartQuantity > 0) {
      this.isDisabled = false;
    }
  };

  decrement = (product: Product) => {
    const index = this.carts.findIndex((cart) => cart.id === product.id);

    if (index >= 0) {
      this.carts[index].cartQuantity -= 1;
    }

    if (this.carts[index].cartQuantity === 1) {
      this.carts[index].cartQuantity = 1;
      this.isDisabled = true;
    }
  };

  get sumCart() {
    return this.carts.reduce(
      (amount, product) => amount + product.cartQuantity,
      0
    );
  }

  get getCarts() {
    return this.carts;
  }
}
