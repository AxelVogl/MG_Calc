var bool = 0;
var first, scnd = "", operatorClicked;
var actScore;

$(".no").on('click', function() {
    var anzeige = document.getElementById("anzeige");
    var currentScore = document.getElementById("anzeige").value;
    var numberClicked = this.value;

    if(bool == false){
        if(currentScore == "0") {
            first = parseInt(currentScore) + parseInt(numberClicked);
            actScore = parseInt(currentScore) + parseInt(numberClicked);
        } else {
            actScore = currentScore + numberClicked;
        }
    }else {
            scnd = scnd + numberClicked;
            console.log("was passiert hier? " + scnd);
            actScore = currentScore + numberClicked;
    }
    
    console.log("aaa: " + numberClicked);
    anzeige.value = actScore;
});

$(".op").on('click', function() {
    var anzeige = document.getElementById("anzeige");
    var currentScore = parseInt(anzeige.value);
    operatorClicked = this.value;

    first = parseInt(currentScore);
    bool = 1;
    anzeige.value = currentScore + operatorClicked;
});

//abfragen welcher operator drin ist und die aktion durchführen

$(".ac").on('click', function() {
    anzeige.value = "0";
    first = 0; 
    scnd = ""; 
    actScore = 0;
    bool = 0;
    console.log("clear "+ first + " und " + scnd + " und " + actScore);
    //in input reinschreiben
});

$(".gleich").on('click', function() {
    console.log("Rechnung: " + first + " " + operatorClicked + " " + scnd);


    if(operatorClicked == "+"){
        anzeige.value = first + parseInt(scnd);
    } else if (operatorClicked == "-") {
        anzeige.value = first - parseInt(scnd);
    } else if (operatorClicked == "/"){
        anzeige.value = first / parseInt(scnd);
    } else if (operatorClicked == "*"){
        anzeige.value = first * parseInt(scnd);
    }
 
});