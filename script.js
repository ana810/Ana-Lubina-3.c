function Pas(ime,kilaza){
this.ime=ime;
this.kilaza=kilaza;
this.grupa=function(){
  if(this.kilaza<5)
     return "grupa1";
    else if(this.kilaza>=5 && this.kilaza<=15)
     return "grupa2";
    else
     return "grupa3";
}
let prvi=new Pas("Šaro",21);
let drugi=new Pas("Šara",11);
console.log(prvi.ime+prvi.kilaza+prvi.grupa());

}