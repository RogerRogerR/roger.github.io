function changeName() {
    let selectedElement = document.getElementById("intro");
    console.log(selectedElement);
    selectedElement.innerText = "Welcome to our home!";
}

function getTime() {
    var dt = new Date();
    let selectedElement = document.getElementById("datetime");
    console.log(selectedElement);
    selectedElement.innerText = "It is " + dt.toLocaleTimeString();
}


function wikiAPI() {
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    connect.open('GET', url);

    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        var pages = wikiObject.query.pages;
        for (i in pages) {
            // basic function
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4');
            document.getElementById("wiki").appendChild(newDiv);
            newDiv.innerText = pages[i].title;

            // super challenge
            var pageURL = "https: //en.wikipedia.org/?curid="
            var newAnchor = document.createElement("a");
            newAnchor.href = pageURL + pages[i].pageid; //setAttribute('href', pageURL+page[i].pageid);
            newAnchor.className = 'd-block'; //setAttribute('class', 'd-block');
            newAnchor.innerText = pages[i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        };
    }
    connect.send();
}


function mapLoad() {
    var latLng = [41.876185, -87.624483];

    var mbAttr = 'Map data &copy; <a href=" ">OpenStreetMap</a > contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a >',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
        streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map)
        .bindPopup("<b>Downtown<br>Chicago</b>").openPopup();



    //Click event
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}

function parseArray() {
    let selectedElement = document.getElementById("array");
    var newRestaurant = prompt("Enter your favorite restaurant in Chicago"); //prompt asks for input
    var newCoffee = prompt("Enter your favorite coffee shop in Chicago"); //prompt asks for input
    var newMuseum = prompt("Enter your favorite museum in Chicago"); //prompt asks for input
    var newUni = prompt("Enter your favorite university in Chicago"); //prompt asks for input

    var array = []
    array.push(newRestaurant.toLowerCase()); //.push method adds a value to an array
    array.push(newCoffee.toLowerCase()); //.push method adds a value to an array
    array.push(newMuseum.toLowerCase()); //.push method adds a value to an array
    array.push(newUni.toLowerCase()); //.push method adds a value to an array

    var x = array.sort(); //.sort method sorts values in an array
    // var y = x.length; //.length method accesses the length of an array
    console.log(x); //log the the sorted array
    console.log(array); //log the entire array
    selectedElement.innerText = "Four of your favorite things in Chicago are " +
        newRestaurant + ", " +
        newCoffee + ", " +
        newMuseum + ", and " +
        newUni +
        ". By lowering all letters and sorting your list alphabetically, your new list is " + x + "."
}

function update() {
    var newWord = document.getElementById("newWord").value.trim();
    var currentWordLength = document.getElementById("long-word").innerHTML.length;
    if (newWord.length > currentWordLength){
        document.getElementById("long-word").innerHTML = newWord;
    }
    document.getElementById("newWord").value = "";
}
