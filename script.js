// oefening 1
let variabele = "Anneke"
console.log(variabele);

// oefening 2
let name = "Doe"
let firstname = "John"
let city = "New-York"
 alert("Name:"+" "+name+" "+"\nFirstname:"+" "+firstname+" "+"\nCity:"+" "+city);

// oefening 3
let person = prompt("Please enter your firstname", "An");
    alert("Hallo " + person);

// oefening 4
let voornaam = prompt("Wat is uw naam?", "An")
let achternaam = prompt("Wat is uw achternaam?","Cattie")
let plaats = prompt("Wat is uw gemeente?","Genk")
alert("uw naam is "+achternaam+" "+voornaam+" en u woont in "+plaats)

// oefening 5
resultaat=""
let eerstecijfer = prompt("geef een cijfer",4);
let tweedecijfer = prompt("geef nog een cijfer",7);
resultaat = (eerstecijfer * tweedecijfer);
alert(resultaat)

// oefening 6
function restDeling() {
  let firstnummer = document.getElementById("firstNumber").value;
  let lastnummer = document.getElementById("secondNumber").value;
  alert(firstnummer%lastnummer);
}

// oefening 7
function berekening(){
  let lengte = document.getElementById("height").value;
  let geboortejaar = document.getElementById("birthdate").value;
  lengte = lengte*2;
  lengte = lengte + 5;
  lengte = lengte * 50;
  lengte = lengte - geboortejaar;
  lengte = lengte + 1766;
  alert(lengte);
}

// oefening 8
function volwassen(){
  let leeftijd = document.getElementById("age").value;
  if (leeftijd >= 18) {
    message = "U bent meerderjarig."
  }
  else if (leeftijd < 18){
    message = "U bent minderjarig."
  }
  alert(message);
}
