// class signature

class Player{
    name:string;
    age:number;
    country: string;
    
     constructor(n:string, x:number, z:string){
        this.name=n;
        this.age = x;
        this.country = z;
    
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing!`)
    }
}

const islam = new Player('Islam', 28, 'Bangladesh')
const afsana = new Player('Afsana', 24, 'Bangladesh')

const players: Player[]=[];
players.push(islam)
players.push(afsana)