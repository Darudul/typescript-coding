"use strict";
// class signature
class Player {
    constructor(n, x, z) {
        this.name = n;
        this.age = x;
        this.country = z;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const islam = new Player('Islam', 28, 'Bangladesh');
const afsana = new Player('Afsana', 24, 'Bangladesh');
const players = [];
players.push(islam);
players.push(afsana);
