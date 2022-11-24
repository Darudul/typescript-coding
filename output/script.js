"use strict";
// class signature
// private -- can't accessible or assign from outside
// readonly -- can accesses but can't reassign from outside
// class Player{
//    private name:string;
//    readonly age:number;
//    public country: string;
//      constructor(n:string, x:number, z:string){
//         this.name=n;
//         this.age = x;
//         this.country = z;
//     }
//     play(){
//         console.log(`${this.name} from ${this.country} is playing!`)
//     }
// }
// shortcut
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
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
