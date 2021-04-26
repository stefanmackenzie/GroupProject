//Stefan put functions for each part of the code and wanted to try and get the code to work for a button it doesn't work but this is due to complexity of the code and with one change it should work, I think it doesn't work because it needs a background to pop up

function rollDice{
  snakeFirstPart();

  var ask_to_play_again = "";
  var spaceNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];
  var imageNumber = [33];
  var diceNumber = 0;
  var buttonRollDice;
  var spaceNr = 0;
  diceRoll(1, 6);

  function snakeFirstPart{
    if (ask_to_play_again == ("yes")
    {
      for (i = 0; i <= 33; i++) {
        (imageNumber[i] = spaceNumber[i]);
      }
      SnakeSecondPart();
    }
  }
  
  function SnakeSecondPart{
    document.game.style.backgroundImage = "url('images/image 0.png')";


    buttonRollDice = prompt("write 'yes' if you want to roll the dice");

    while ((spaceNr < 33) && buttonRollDice == ("yes")) {
      //get random dice number
      diceNumber = Math.floor(Math.random() * 6) + 1;
      alert("dice Number is " + diceNumber);

      //count space number
      spaceNr = spaceNr + diceNumber;

      //spaces with ladders
      if (spaceNr == 4 || spaceNr == 6 || spaceNr == 17) {
        if (imageNumber[spaceNr] == ("4")) document.game.style.backgroundImage = "url('images/image 4.png')";
        else if (imageNumber[spaceNr] == ("6")) document.game.style.backgroundImage = "url('images/image 6.png')";
        else if (imageNumber[spaceNr] == ("17")) document.game.style.backgroundImage = "url('images/image 17.png')";
        spaceNr = spaceNr + 3;
        alert("ladder is here! ");
      }


      //spaces with snakes
      if (spaceNr == 15 || spaceNr == 22 || spaceNr == 29) {
        if (imageNumber[spaceNr] == ("15")) document.game.style.backgroundImage = "url('images/image 15.png')";
        else if (imageNumber[spaceNr] == ("22")) document.game.style.backgroundImage = "url('images/image 22.png')";
        else if (imageNumber[spaceNr] == ("29")) document.game.style.backgroundImage = "url('images/image 29.png')";
        spaceNr = spaceNr - 10;
        alert("snake is here! ");
      }

      //changing backgrounds
      if (imageNumber[spaceNr] == ("1")) document.game.style.backgroundImage = "url('images/image 1.png')";
      else if (imageNumber[spaceNr] == ("2")) document.game.style.backgroundImage = "url('images/image 2.png')";
      else if (imageNumber[spaceNr] == ("3")) document.game.style.backgroundImage = "url('images/image 3.png')";
      else if (imageNumber[spaceNr] == ("5")) document.game.style.backgroundImage = "url('images/image 5.png')";
      else if (imageNumber[spaceNr] == ("7")) document.game.style.backgroundImage = "url('images/image 7.png')";
      else if (imageNumber[spaceNr] == ("8")) document.game.style.backgroundImage = "url('images/image 8.png')";
      else if (imageNumber[spaceNr] == ("9")) document.game.style.backgroundImage = "url('images/image 9.png')";
      else if (imageNumber[spaceNr] == ("10")) document.game.style.backgroundImage = "url('images/image 10.png')";
      else if (imageNumber[spaceNr] == ("11")) document.game.style.backgroundImage = "url('images/image 11.png')";
      else if (imageNumber[spaceNr] == ("12")) document.game.style.backgroundImage = "url('images/image 12.png')";
      else if (imageNumber[spaceNr] == ("13")) document.game.style.backgroundImage = "url('images/image 13.png')";
      else if (imageNumber[spaceNr] == ("14")) document.game.style.backgroundImage = "url('images/image 14.png')";
      else if (imageNumber[spaceNr] == ("16")) document.game.style.backgroundImage = "url('images/image 16.png')";
      else if (imageNumber[spaceNr] == ("18")) document.game.style.backgroundImage = "url('images/image 18.png')";
      else if (imageNumber[spaceNr] == ("19")) document.game.style.backgroundImage = "url('images/image 19.png')";
      else if (imageNumber[spaceNr] == ("20")) document.game.style.backgroundImage = "url('images/image 20.png')";
      else if (imageNumber[spaceNr] == ("21")) document.game.style.backgroundImage = "url('images/image 21.png')";
      else if (imageNumber[spaceNr] == ("23")) document.game.style.backgroundImage = "url('images/image 23.png')";
      else if (imageNumber[spaceNr] == ("24")) document.game.style.backgroundImage = "url('images/image 24.png')";
      else if (imageNumber[spaceNr] == ("25")) document.game.style.backgroundImage = "url('images/image 25.png')";
      else if (imageNumber[spaceNr] == ("26")) document.game.style.backgroundImage = "url('images/image 26.png')";
      else if (imageNumber[spaceNr] == ("27")) document.game.style.backgroundImage = "url('images/image 27.png')";
      else if (imageNumber[spaceNr] == ("28")) document.game.style.backgroundImage = "url('images/image 28.png')";
      else if (imageNumber[spaceNr] == ("30")) document.game.style.backgroundImage = "url('images/image 30.png')";
      else if (imageNumber[spaceNr] == ("31")) document.game.style.backgroundImage = "url('images/image 31.png')";
      else if (imageNumber[spaceNr] == ("32")) document.game.style.backgroundImage = "url('images/image 32.png')";
      else if (imageNumber[spaceNr] == ("33")) document.game.style.backgroundImage = "url('images/image 33.png')";
      else document.game.style.backgroundImage = "url('images/image 34.png')";

      if (spaceNr < 33) {
        buttonRollDice = prompt("write 'yes' if you want to roll the dice");
      }
      SnakeThirdPart();
    }


    //asking if user wants to play again
    if (spaceNr >= 33) {
      alert("congratulations! you won this game!");
      ask_to_play_again = prompt(" would you like to play again? please reply yes or no");

    }
  }

  function SnakeThirdPart{

    if (ask_to_play_again == ("no")) {
      alert("have a nice day");
    }

    var totalLog = "";
    var currentLog = "The player rolled a " + diceNumber + "<br>" + " The player is at square " + spaceNr;
    var totalLog = totalLog + currentLog;
    document.getElementById("eventLog").innerHTML = totalLog;
  }
}

// reference = https://stackoverflow.com/questions/39432280/javascript-dice-roll-when-button-is-clicked

function diceRoll(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var roll = Math.floor(Math.random() * (max - min + 1)) + min;
  var totalLog = "";
  var currentLog = "The player rolled a " + roll + "<br>";
  var totalLog = totalLog + currentLog;
  document.getElementById("eventLog").innerHTML = totalLog;
}

