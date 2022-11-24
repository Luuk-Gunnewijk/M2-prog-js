class App
{
    runApplication()
    {
        console.log("Hello World");
        //je codde gaat hier
        let appNaam = "De naam";
        console.log(appNaam);
        let versienummer = 0.9;
        console.log(versienummer);
        let versiedatum = new Date();
        console.log(versiedatum);
        let autheur = "Luuk Gunnewijk";
        console.log(autheur);
        let copyright = "By me";
        console.log(copyright);
        let distributeur = "Luuk Gunn";
        console.log(distributeur);
        let darkmode = true;
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();
