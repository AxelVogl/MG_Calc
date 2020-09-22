$(".no").on('click', function() {
    var anzeige = document.getElementById("anzeige");
    var currentScore = parseInt(document.getElementById("anzeige").value);
    var numberClicked = parseInt(this.value);

    var actScore = currentScore + numberClicked;

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