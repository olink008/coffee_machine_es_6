export class Milk {
    constructor (amount) {
        this._amount = amount;
    }
    set amount (amount) {this._amount = amount}
    get amount ()       {return this._amount}
}