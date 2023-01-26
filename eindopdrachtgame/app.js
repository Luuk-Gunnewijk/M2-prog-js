class App 
{
    runApplication() 
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
    }

}

class Huis
{
    runApplication()
    {
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();

    }
}

let app = new App();
app.runApplication();
