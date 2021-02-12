function changeTitle() {
    let selectedElement = document.getElementById("week1Card");
    console.log(selectedElement);
    selectedElement.innerText = "Week One";
}

function currentMinute() {
    var dt = new Date();
    let selectedElement = document.getElementById("datetime");
    console.log(selectedElement);
    selectedElement.innerText = "Today is " + dt.toLocaleDateString() + ", and it is " +
        dt.toLocaleTimeString() + " now.";
}
