// Step 1
var randomNum = Math.floor(Math.random() * 6) + 1; //it will give me any num b/w 1 - 6
// console.log(randomNum);

// step 2
var randomDiceImg = "images/dice" + randomNum + ".png";  // concatinate imgage with random num.

// step 3
var image1 = document.querySelectorAll("img")[0];  // select image1 
image1.setAttribute("src", randomDiceImg);         // manupulating ki src attribute me randomDiceImg se
// console.log(image1);


//step 4
// ab dice 2 ke liye bhi img change 
var randomNum2 = Math.floor(Math.random() * 6) + 1; //it will give me any num b/w 1 - 6

// same as above for dice1
var randomDiceImg2 = "images/dice" + randomNum2 + ".png";

//same as above for dice1
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImg2);


//step 5
if(randomNum > randomNum2){         // agar randomNum bada ata hai to --> player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNum2 > randomNum){    // agar randomNum2 bada ata hai to --> player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{                              // agar randomNum and randomNum2 barabar hai to ----> Draw
  document.querySelector("h1").innerHTML = " Draw!"
}
