let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");




class Background {

    runApplication() {

        g.beginPath();
        g.fillStyle = 'MidnightBlue'
        g.moveTo(0, 0)
        g.lineTo(0, 0)
        g.lineTo(2000, 0)
        g.lineTo(2000, 1000)
        g.lineTo(0, 1000)
        g.closePath();
        g.stroke();
        g.fill();


    }
}

class Split {

    runApplication() {

        g.beginPath();
        g.fillStyle = 'brown'
        g.moveTo(290, 500)
        g.lineTo(290, 500)
        g.lineTo(310, 500)
        g.lineTo(310, 800)
        g.lineTo(290, 800)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'brown'
        g.moveTo(1690, 500)
        g.lineTo(1690, 500)
        g.lineTo(1690, 800)
        g.lineTo(1710, 800)
        g.lineTo(1710, 500)
        g.closePath();
        g.stroke();
        g.fill();

    }
}

class Windows {

    runApplication() {

        g.beginPath();
        g.fillStyle = 'yellow'
        g.moveTo(400, 500)
        g.lineTo(400, 500)
        g.lineTo(400, 800)
        g.lineTo(200, 800)
        g.lineTo(200, 500)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'yellow'
        g.moveTo(1600, 500)
        g.lineTo(1600, 500)
        g.lineTo(1600, 800)
        g.lineTo(1800, 800)
        g.lineTo(1800, 500)
        g.closePath();
        g.stroke();
        g.fill();
    }
}

class Huis {

    runApplication() {

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(100, 400);
        g.lineTo(100, 400);
        g.lineTo(300, 50)
        g.lineTo(500, 400)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'brown'
        g.moveTo(500, 400)
        g.lineTo(500, 400)
        g.lineTo(500, 900)
        g.lineTo(100, 900)
        g.lineTo(100, 400)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(1900, 400);
        g.lineTo(1900, 400);
        g.lineTo(1700, 50);
        g.lineTo(1500, 400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'brown'
        g.moveTo(1500, 400)
        g.lineTo(1500, 400);
        g.lineTo(1500, 900);
        g.lineTo(1900, 900);
        g.lineTo(1900, 400)
        g.closePath();
        g.stroke();
        g.fill();
    }
}

class Road {
    runApplication() {

        g.beginPath();
        g.fillStyle = 'DarkGray'
        g.moveTo(2000, 900)
        g.lineTo(2000, 900)
        g.lineTo(2000, 1000)
        g.lineTo(0, 1000)
        g.lineTo(0, 900)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(1900, 925)
        g.lineTo(1900, 925)
        g.lineTo(1800, 925)
        g.lineTo(1800, 975)
        g.lineTo(1900, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(1700, 925)
        g.lineTo(1700, 925)
        g.lineTo(1600, 925)
        g.lineTo(1600, 975)
        g.lineTo(1700, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(1500, 925)
        g.lineTo(1500, 925)
        g.lineTo(1400, 925)
        g.lineTo(1400, 975)
        g.lineTo(1500, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(1300, 925)
        g.lineTo(1300, 925)
        g.lineTo(1200, 925)
        g.lineTo(1200, 975)
        g.lineTo(1300, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(1100, 925)
        g.lineTo(1100, 925)
        g.lineTo(1000, 925)
        g.lineTo(1000, 975)
        g.lineTo(1100, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(900, 925)
        g.lineTo(900, 925)
        g.lineTo(800, 925)
        g.lineTo(800, 975)
        g.lineTo(900, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(700, 925)
        g.lineTo(700, 925)
        g.lineTo(600, 925)
        g.lineTo(600, 975)
        g.lineTo(700, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(500, 925)
        g.lineTo(500, 925)
        g.lineTo(400, 925)
        g.lineTo(400, 975)
        g.lineTo(500, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(300, 925)
        g.lineTo(300, 925)
        g.lineTo(200, 925)
        g.lineTo(200, 975)
        g.lineTo(300, 975)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'white'
        g.moveTo(100, 925)
        g.lineTo(100, 925)
        g.lineTo(0, 925)
        g.lineTo(0, 975)
        g.lineTo(100, 975)
        g.closePath();
        g.stroke();
        g.fill();

    }
}

class Tree {
    runApplication() {

        g.beginPath();
        g.fillStyle = 'darkgreen'
        g.moveTo(900, 900);
        g.lineTo(900, 900);
        g.lineTo(1000, 900)
        g.lineTo(1000, 800)
        g.lineTo(1200, 800)
        g.lineTo(1100, 700)
        g.lineTo(1180, 700)
        g.lineTo(1080, 600)
        g.lineTo(1160, 600)
        g.lineTo(1060, 500)
        g.lineTo(1140, 500)
        g.lineTo(1000, 400)
        g.lineTo(950, 365)
        g.lineTo(900, 400)
        g.lineTo(760, 500)
        g.lineTo(860, 500)
        g.lineTo(740, 600)
        g.lineTo(840, 600)
        g.lineTo(720, 700)
        g.lineTo(820, 700)
        g.lineTo(700, 800)
        g.lineTo(900, 800)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = 'brown'
        g.moveTo(900, 900)
        g.lineTo(900, 900)
        g.lineTo(900, 800)
        g.lineTo(1000, 800)
        g.lineTo(1000, 900)
        g.closePath();
        g.stroke();
        g.fill();

    }
}

class Text {
    runApplication() {
        g.font = "50px Arial";
        g.fillStyle = "gold";
        g.fillText("Merry Xmas 2023", 750, 200);
    }
}

class Clouds {
    runApplication() {
        g.beginPath();
        g.fillStyle = "white";
        g.arc(100, 100, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(130, 120, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(150, 70, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(150, 100, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(180, 80, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(180, 110, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1400, 110, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1460, 130, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1460, 130, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1430, 90, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1400, 120, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1480, 100, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1490, 90, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(1470, 110, 50, 0, 2 * Math.PI, false);
        g.strokeStyle = "white";
        g.stroke();
        g.fill()
    }
}

let background = new Background();
background.runApplication();

let huis = new Huis();
huis.runApplication();

let road = new Road();
road.runApplication();

let tree = new Tree();
tree.runApplication();

let windows = new Windows();
windows.runApplication();

let split = new Split();
split.runApplication();

let text = new Text();
text.runApplication();

let clouds = new Clouds();
clouds.runApplication();
