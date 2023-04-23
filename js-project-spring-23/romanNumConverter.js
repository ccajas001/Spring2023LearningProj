function convertToRoman(num) {
    //array of objects whose name is a roman numerial and its value is the decimal value of that roman numerial
    var key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,
    L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

    //initiliaze blank str and iterator variable for for-loop
    var roman = '',i;

    // method: 
    // 1) start at the first object in key, which so happens to be the largest roman numerial in the set
    // 2) if the number inputed is greater than the current roman numerial's value
        // subtract add the name of that roman numerial to var string "roman" and subtract from the overall value of input number
        // repeat this latter step as many times until the number is no longer greater than the current roman numerial object
    // 3) move on to the next roman numerial and repeat step 2)
    for ( i in key ) {
      while ( num >= key[i] ) {
        roman += i;
        num -= key[i];
      }
    }
    return roman;
  }

//
function display(){
  var x = document.getElementById("numInput").value;
  //checks if the input is actually an input
  if (isNaN(parseInt(x,10))) {
    //changes script labeled (id=) "demo" to respected output string
    document.getElementById("demo").innerHTML = "This is not a number!";
  //checks if the number is within range (3999-1)
  }else if (parseInt(x,10)>3999) {
    document.getElementById("demo").innerHTML = "Number isn't within valid range!";
  //executes display if valid conditions are met
  } else {
    var roman = convertToRoman(x);
    document.getElementById("demo").innerHTML = "Roman numerial of " + x + " is " + roman + ". ";
  }
}
