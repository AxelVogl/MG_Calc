$(".no").on('click', function() {
    var anzeige = document.getElementById("anzeige");
    var currentScore = document.getElementById("anzeige").value;
    var numberClicked = this.value;
    if(currentScore == "0") {
        var actScore = parseInt(currentScore) + parseInt(numberClicked);
    } else {
        actScore = currentScore + numberClicked;
    }


    

    anzeige.value = actScore;
});

$(".op").on('click', function() {
    var anzeige = document.getElementById("anzeige");
    var currentScore = parseInt(anzeige.value);
    var operatorClicked = this.value;

    anzeige.value = currentScore + operatorClicked;
    //in input reinschreiben
});

//abfragen welcher operator drin ist und die aktion durchführen

$(".ac").on('click', function() {
    anzeige.value = 0;
    //in input reinschreiben
});

$(".gleich").on('click', function() {
    //ergebnis berechnen
});