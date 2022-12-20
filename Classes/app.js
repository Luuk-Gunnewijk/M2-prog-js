class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.Carl1 = naam;
        this.Carl2 = vleeseter;
        this.Carl3 = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(Dino){
        Dino.leeft = false;
        console.log(this.Carl1 + " eet Dino " + Dino.Carl1);
        
    }
}

class Dino2
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.Garry1 = naam;
        this.Garry2 = vleeseter;
        this.Garry3 = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(Dino2){
        Dino2.leeft = false;
        console.log(this.Garry1 + " eet Dino " + Dino2.Garry1);
    }
}


class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}

class App
{
    runApplication()
    {
       let trex = new Dino("tex",true,10);
       console.log(trex);
       let garry = new Dino("Garry",true,12);
       console.log(Garry);
    }
}

let app = new App();
app.runApplication();
