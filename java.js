function changeTitle() {
    let selectedElement = document.getElementById("intro");
    console.log(selectedElement);
    selectedElement.innerText = "Welcome to our home!";
}

function currentMinute() {
    var dt = new Date();
    let selectedElement = document.getElementById("datetime");
    console.log(selectedElement);
    selectedElement.innerText = "It is " + dt.toLocaleTimeString();
}
