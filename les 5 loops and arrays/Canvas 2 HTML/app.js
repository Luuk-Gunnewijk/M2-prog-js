class App
{
    runAplication()
    {
        let arr = ["Kendrick lamar", "Johnny cash", "Bob marely", "Darkluc06", "Billie Ellish"];
        console.log(arr);
        let headers = document.getElementsByClassName("Badname");
        headers[0].innerHTML = "Kendrick Lamar";
        headers[1].innerHTML = "Johnny cash";
        headers[2].innerHTML = "Bob Marely";
        headers[3].innerHTML = "Darkluc06";
        headers[4].innerHTML = "Billie Ellish";
        
    }
}

let app = new App();
app.runAplication();