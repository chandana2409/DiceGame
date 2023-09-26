function declare() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomImageSource = "images/dice" + randomNumber + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if (randomNumber > randomNumber2)
        document.querySelector("h1").innerHTML = "Player1 is win 🚩";
    else if (randomNumber < randomNumber2)
        document.querySelector("h1").innerHTML = "Player2 is win 🚩";
    else
        document.querySelector("h1").innerHTML = "Draw Match";
}