export abstract class Money {
  protected amount = 0;

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  abstract currency(): string;
  abstract times(multiplier: number):  Money;

  equals(obj: unknown): boolean {
    const money = <Money> obj;

    return this.amount === money.amount && (this.constructor === money.constructor);
  }

}

export class Dollar extends Money {
  private _currency: string;

  constructor(amount: number) {
    super();

    this.amount = amount;
    this._currency = "USD";
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  private _currency: string;

  constructor(amount: number) {
    super();

    this.amount = amount;
    this._currency = "CHF";
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}


// TODO 
// 
// - [ ] $5 + 10 CHF = $10 if rate is 2:1
// - [x] $5 * 2 = $10
// - [x] Make `amount` private.
// - [x] Dollar side effects?
// - [ ] Money rounding?
// - [x] equals()
// - [ ] hashCode()
// - [ ] Equal null
// - [ ] Equal object
// - [x] 5 CHF * 2 = 10 CHF
// - [ ] Dollar/Franc duplication
// - [x] Common equals
// - [ ] Common times
// - [x] Compare Francs with Dollars
// - [ ] Currency?
// - [ ] Delete testFrancMultiplication?
//
// Personal TODO
// - [ ] Don't export Franc and Dollar
