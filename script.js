/*Psići
Projekt je otvoren na replit.com.
Koristeći konstruktorsku invokaciju napravite objekt Pas koji sadrži ime, kilažu i grupu koja je početno 0.
Napravite niz koji sadrži minimalno 5 instanci objekta Pas te napravite funkciju koja ih će ovisno o kilaži pridodijeliti grupi.
Ako im je kilaža između 0 i 12kg idu u grupu 1, 
ako im je kilaža između 12 i 30kg idu u grupu 2 
dok svi s kilažom preko 30kg idu u grupu 3.
Napravite funkciju koja će ispisati sve članove grupe koja je poslana kao argument.*/

//objekt
class Pas {
    //konstruktor
    constructor(ime,kg)
    {
    this.ime=ime;
    this.kilaža=kg;
    this.grupa=0;
    }
    //metoda
    kategorija(){
        if(this.kilaža<12)
            this.grupa=1;
        else if(this.kilaža>=12 && this.kilaža<30)
            this.grupa=2;
        else if(this.kilaža>=30)
            this.grupa=3;
    }
}
//niz
let psi=[
    new Pas("Šaro",25),
    new Pas("Floki",35),
    new Pas("Flekica",2),
    new Pas("Kiara",1.5),
    new Pas("Šara",17)
]
for(let i=0;i<psi.length;i++){
    psi[i].kategorija();
}
//funkcija
function ispis(g){
    for(let i=0;i<psi.length;i++){
        if(psi[i].grupa==g){
            console.log(`${psi[i].ime}, ${psi[i].kilaža}, ${psi[i].grupa}`)
        }
    }
}
ispis(1);
