document.getElementById("roll").onclick = function() {


var ask_to_play_again= ("yes")

if (ask_to_play_again==("yes"))
{
   var spaceNumber= ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33'];
   var ImageNumber= [33];
   var DiceNumber;
   var buttonRollDice;
   var spaceNr=0;

    for( i=0; i<=33; i++)
    {
     (ImageNumber[i]=spaceNumber[i]);
    }


   document.body.style.backgroundImage = "url('images/image 0.png')";
 
  
    buttonRollDice=prompt("write 'yes' if you want to roll the dice");

   while ( (spaceNr<33) &&  buttonRollDice == ("yes") )
    {
         //get random dice number
         DiceNumber=Math.floor(Math.random() * 6) + 1;
         alert("dice Number is "+DiceNumber);
        
         //count space number
         spaceNr=spaceNr+DiceNumber;

         //spaces with ladders
         if (spaceNr==4 || spaceNr==6 || spaceNr==17)
         {
            if(ImageNumber[spaceNr]==("4"))       document.body.style.backgroundImage = "url('images/image 4.png')";
            else if(ImageNumber[spaceNr]==("6"))      document.body.style.backgroundImage = "url('images/image 6.png')";
            else if(ImageNumber[spaceNr]==("17"))      document.body.style.backgroundImage = "url('images/image 17.png')";
            spaceNr=spaceNr+3;
            alert ("ladder is here! ");
         }


         //spaces with snakes
         if (spaceNr==15 || spaceNr==22 || spaceNr==29)
          {
           if(ImageNumber[spaceNr]==("15"))     document.body.style.backgroundImage = "url('images/image 15.png')";
           else if(ImageNumber[spaceNr]==("22"))       document.body.style.backgroundImage = "url('images/image 22.png')";
           else if(ImageNumber[spaceNr]==("29"))       document.body.style.backgroundImage = "url('images/image 29.png')";
           spaceNr=spaceNr-10;
           alert ("snake is here! ");
          }
  
          //changing backgrounds
          if(ImageNumber[spaceNr]==("1"))        document.body.style.backgroundImage = "url('images/image 1.png')";
          else if(ImageNumber[spaceNr]==("2"))      document.body.style.backgroundImage = "url('images/image 2.png')";
          else if(ImageNumber[spaceNr]==("3"))       document.body.style.backgroundImage = "url('images/image 3.png')";
          else if(ImageNumber[spaceNr]==("5"))      document.body.style.backgroundImage = "url('images/image 5.png')";
          else if(ImageNumber[spaceNr]==("7"))      document.body.style.backgroundImage = "url('images/image 7.png')"; 
          else if(ImageNumber[spaceNr]==("8"))       document.body.style.backgroundImage = "url('images/image 8.png')";
          else if(ImageNumber[spaceNr]==("9"))       document.body.style.backgroundImage = "url('images/image 9.png')";
          else if(ImageNumber[spaceNr]==("10"))       document.body.style.backgroundImage = "url('images/image 10.png')";
          else if(ImageNumber[spaceNr]==("11"))       document.body.style.backgroundImage = "url('images/image 11.png')";
          else if(ImageNumber[spaceNr]==("12"))       document.body.style.backgroundImage = "url('images/image 12.png')";
          else if(ImageNumber[spaceNr]==("13"))       document.body.style.backgroundImage = "url('images/image 13.png')";
          else if(ImageNumber[spaceNr]==("14"))       document.body.style.backgroundImage = "url('images/image 14.png')";
          else if(ImageNumber[spaceNr]==("16"))       document.body.style.backgroundImage = "url('images/image 16.png')";
          else if(ImageNumber[spaceNr]==("18"))       document.body.style.backgroundImage = "url('images/image 18.png')";
          else if(ImageNumber[spaceNr]==("19"))       document.body.style.backgroundImage = "url('images/image 19.png')";
          else if(ImageNumber[spaceNr]==("20"))       document.body.style.backgroundImage = "url('images/image 20.png')";
          else if(ImageNumber[spaceNr]==("21"))       document.body.style.backgroundImage = "url('images/image 21.png')";
          else if(ImageNumber[spaceNr]==("23"))       document.body.style.backgroundImage = "url('images/image 23.png')";
          else if(ImageNumber[spaceNr]==("24"))       document.body.style.backgroundImage = "url('images/image 24.png')";
          else if(ImageNumber[spaceNr]==("25"))       document.body.style.backgroundImage = "url('images/image 25.png')";
          else if(ImageNumber[spaceNr]==("26"))       document.body.style.backgroundImage = "url('images/image 26.png')";
          else if(ImageNumber[spaceNr]==("27"))       document.body.style.backgroundImage = "url('images/image 27.png')";
          else if(ImageNumber[spaceNr]==("28"))       document.body.style.backgroundImage = "url('images/image 28.png')";
          else if(ImageNumber[spaceNr]==("30"))       document.body.style.backgroundImage = "url('images/image 30.png')";
          else if(ImageNumber[spaceNr]==("31"))       document.body.style.backgroundImage = "url('images/image 31.png')";
          else if(ImageNumber[spaceNr]==("32"))       document.body.style.backgroundImage = "url('images/image 32.png')";
          else if(ImageNumber[spaceNr]==("33"))       document.body.style.backgroundImage = "url('images/image 33.png')";
          else document.body.style.backgroundImage = "url('images/image 34.png')";
        
          if (spaceNr<33)
          { 
            buttonRollDice=prompt("write 'yes' if you want to roll the dice");
          }
    }

   
    //asking if user wants to play again
   if(spaceNr>=33)
   {
    alert ("congratulations! you won this game!" );
    ask_to_play_again=prompt(" would you like to play again? please reply yes or no");

   }
 
}

 if (ask_to_play_again==("no"))
 {
   alert ("have a nice day");
 }

 var totalLog ="";
 var currentLog = "The player rolled a " + DiceNumber + "<br>" +" The player is at square " + spaceNr; 
 var totalLog = totalLog+currentLog;
 document.getElementById("eventLog").innerHTML = totalLog;
}




// reference = https://stackoverflow.com/questions/39432280/javascript-dice-roll-when-button-is-clicked
/*
function diceRoll(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var roll = Math.floor(Math.random() * (max - min + 1)) + min;
  var totalLog = "";
  var currentLog = "The player rolled a " + roll + "<br>"; 
  var totalLog = totalLog+currentLog;
      document.getElementById("eventLog").innerHTML = totalLog;
}
document.getElementById("roll").onclick = function() {
  diceRoll(1, 6);
}
*/




