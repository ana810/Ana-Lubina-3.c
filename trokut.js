/*Koristeći klasu definiraj jednakostranični troku kojem ćeš izračunati opseg i površinu.
Kreiraj niz tri trokuta.
Ispiši stranice, opseg i površinu trokuta čija je površina manja od 5.*/

//a=stranica
class Trokut{
    constructor(a){
        this.a=a;
    }
    opseg(){
        return 3*this.a;
    }
     površina(){
        return Math.pow(this.a,2)*Math.sqrt(3/4);
    }
}
let t=[];
t.push(new Trokut(3));
t.push(new Trokut(2.5));
t.push(new Trokut(1));
for(let i=0;i<t.length;i++){
    if(t[i].površina()<5){
        console.log(`${t[i].a}, ${t[i].opseg()}, ${t[i].površina()}`)
    }
}

