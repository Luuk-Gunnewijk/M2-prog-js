class App

{
    runApplication()
    {
        let lamp1 = new lamp1("hanglamp", 5.77, true);
        console.log(lamp1)
        let lamp2 = new lamp2("Muurlamp", 4.14, true);
        console.log(lamp2)
    }
}
class lamp
{
    constructor(plaast,helderheid,knop)
    {
        this.plaast = plaast;
        this.helderheid = helderheid;
        this.knop = knop;
        this.aan = true;
        this.warm = true;
    }
}

let app = new App();
app.runApplication();