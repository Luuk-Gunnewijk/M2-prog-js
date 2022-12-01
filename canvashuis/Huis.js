class App
{
  runApplication()
  {
      console.log("Hello World!");
      let canvas= document.getElementById("canvasId");
      let g = canvas.getContext("2d"); 
      console.log(canvas);
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

      g.beginPath();
      g.fillStyle = "gray";
      g.moveTo(700,200);
      g.lineTo(700,200);
      g.lineTo(800,300);
      g.lineTo(600,400);
      g.lineTo(700,200);
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath();
      g.moveTo(800,300);
      g.lineTo(800,300);
      g.lineTo(800,500);
      g.lineTo(600,600);
      g.lineTo(600,400);
      g.lineTo(800,300);
      g.fill();

      g.beginPath();
      g.moveTo(600,400);
      g.lineTo(600,400);
      g.lineTo(600,600);
      g.lineTo(200,500);
      g.lineTo(200,300);
      g.lineTo(600,400);
      g.fillStyle = "silver";
      g.fill();

      g.beginPath();
      g.moveTo(325, 400);
      g.lineTo(325, 437.5);
      g.lineTo(375, 450);
      g.lineTo(375, 412.5);
      g.fillStyle = "Blue";
      g.fill();
      g.closePath();
      g.stroke();
      g.beginPath();
      g.moveTo(325, 437.5);
      g.lineTo(325, 475);
      g.lineTo(375, 487.5);
      g.lineTo(375, 450);
      g.fillStyle = "Blue";
      g.fill();
      g.closePath();
      g.stroke();
      g.beginPath();
      g.moveTo(375, 487.5);
      g.lineTo(425, 500);
      g.lineTo(425, 462.5);
      g.lineTo(375, 450);
      g.fillStyle = "Blue";
      g.fill();
      g.closePath();
      g.stroke();
      g.beginPath();
      g.moveTo(375, 450);
      g.lineTo(425, 462.5);
      g.lineTo(425, 425);
      g.lineTo(375, 412.5);
      g.fillStyle = "Blue";
      g.fill();
      g.closePath();
      g.stroke();
      
  }

}

let app = new App ();
app.runApplication();