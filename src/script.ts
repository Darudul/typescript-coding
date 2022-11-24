// function signature

let calculation: (x: number, y: number, z:string)=> number;

calculation =(a:number, b: number, c: string)=>{
    if(c === "add"){
        return a + b
    }else{
        return a - b
    }
}
console.log(calculation(9, 6, "add"))