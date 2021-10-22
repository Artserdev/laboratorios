//Nombre y ubicación--------------------------------------------------------------------------------------

var hoteles = {
  Palace: {
    name: "Palace",
    location: "Madrid",
    img: "img/El-Palace-de-Madrid.jpeg",
  },

  Majestic: {
    name: "Majestic",
    location: "Barcelona",
    img: "img/Majestic-actual-1.jpeg",
  },
};

var selectedHotel = prompt("Indica el nombre del hotel: Palace o Majestic");

document.getElementById("hotel-name").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;
document.getElementById("hotel-location").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("hotel-img").src = hoteles[selectedHotel].img;

//Puntuación-----------------------------------------------------------------------------------------------

var stars = {
  1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>;",
};

var rating = prompt(
  "¿Con cuantas estrellas calificas el hotel?: 1, 2, 3, 4 o 5"
);

document.getElementById("hotel-rating").innerHTML = stars[rating];

//Reseña anonima--------------------------------------------------------------------------------------------

var casilla = confirm("¿Quieres que tu reseña sea anonima?");
document.getElementById("review").checked = casilla;

//container 1-----------------------------------------------------

/* 
var hotelName = "Madrid Palace";
var hotelLocation = "Madrid";
var hotelImg = "img/El-Palace-de-Madrid.jpeg";

document.getElementById("hotel-name").innerHTML = "Hotel " + hotelName;

document.getElementById("hotel-location").innerHTML =
  "Ubicado en " + hotelLocation;

document.getElementById("hotel-img").src = hotelImg; */

//container 2-----------------------------------------------------

//anónimo (true o false)
//checkbox boolean
// confirm() boolean

/* var rating = prompt("Puntuación del 1 al 5");
document.getElementById("hotel-rating").innerHTML = " " + rating + " estrellas";

var casilla = confirm("¿Quieres que tu reseña sea anonima?");
document.getElementById("review").checked = casilla; */

//Usuario: elige un hotel de los sugeridos

// Con 1 objeto-----------------------------------------------------

/* var hotel1 = {
  name: "Madrid Palace",
  location: "Madrid",
  img: "img/El-Palace-de-Madrid.jpeg",
};

document.getElementById("hotel-name").innerHTML = hotel1.name;
document.getElementById("hotel-location").innerHTML = hotel1.location;
document.getElementById("hotel-img").src = hotel1.img; */
