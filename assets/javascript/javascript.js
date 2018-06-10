//On load: Generate a target score and different score values for each crystals
//Crystals are worth between 1-12
//Target scores are between 19-120
    //Generate vars: wins, losses, target score, crystal scores, current score
wins = 0;
losses = 0;
targetscore = Math.ceil(Math.random() * 101) + 19;
currentscore = 0;
var gems = [gem1,gem2,gem3,gem4]
var gem1score = Math.ceil(Math.random() * 12);
var gem2score = Math.ceil(Math.random() * 12);
var gem3score = Math.ceil(Math.random() * 12);
var gem4score = Math.ceil(Math.random() * 12);
console.log(gem1score + "," + gem2score +  "," + gem3score + "," + gem4score);
$("#targetdisplay").html(targetscore);

// Define functions

function reset() {
    currentscore = 0;
    targetscore = Math.ceil(Math.random() * 120) + 19;
    gem1score = Math.ceil(Math.random() * 12);
    gem2score = Math.ceil(Math.random() * 12);
    gem3score = Math.ceil(Math.random() * 12);
    gem4score = Math.ceil(Math.random() * 12);
    $("#targetdisplay").html("<h2>" + targetscore + "<h2>");
    $("#scoredisplay").html(currentscore);
    console.log(gem1score + "," + gem2score +  "," + gem3score + "," + gem4score);
}

//If current score is equal to target score, game resets, wins increase
function winfunction() {
    if(currentscore == targetscore) {
        wins++;
        $("#windisplay").html("Wins: " + wins);
        $("#announcement").html("You win!");
        reset();
    }
}

//If current score is more than target score, game resets, losses increase
function losefunction() {
    console.log("losefunction");
    if(currentscore > targetscore) {
        losses++;
        $("#lossdisplay").html("Losses: " + losses);
        $("#announcement").html("You lose!");
        reset();
    }
}

// If current score is less than target score, players can click again

//On crystal button click: add score assigned to crystal to the score display div
$("#gem1").click(function() {
    currentscore = currentscore + gem1score;
    $("#scoredisplay").html(currentscore);
    winfunction();
    losefunction();    
});

$("#gem2").click(function() {
    currentscore = currentscore + gem2score;
    $("#scoredisplay").html(currentscore);
    winfunction();
    losefunction();
});

$("#gem3").click(function() {
    currentscore = currentscore + gem3score;
    $("#scoredisplay").html(currentscore);;
    winfunction();
    losefunction();    
});

$("#gem4").click(function() {
    currentscore = currentscore + gem1score;
    $("#scoredisplay").html(currentscore);
    winfunction();
    losefunction();
});