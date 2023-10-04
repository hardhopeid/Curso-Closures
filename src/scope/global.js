 var a; // Declarando
 var b = 'b'; // Declarando / Asignamos
 b = 'bb'; // Reasignacion
 var a = 'aa';  // Redeclaracion


 // Global Scope
 var fruit = 'apple'; // Global

 function bestFruit() {
    console.log(fruit);
 }

 bestFruit();

 function countries() {
    county = 'Colombia'; //Global
    console.log (county);
 }

 countries();
console.log(county);