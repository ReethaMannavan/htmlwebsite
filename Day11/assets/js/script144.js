// JS144. Create a quiz system where answers persist using SessionStorage and JSON.

var allQuestions = [{
  question: "What is Javascript?",
  choices: ["An ancient language", "A programming language", "A medieval manuscript", "An internet troll"],
  correctAnswer: 1
}, {
  question: "Where is Venice?",
  choices: ["Peru", "Greece", "US", "Italy", "Congo"],
  correctAnswer: 3
}, {
  question: "What does RGB mean?",
  choices: ["Red, Green, Blue", "Real Graphics Body", "SWAG"],
  correctAnswer: 0
}, {
  question: "How many strings has a  guitar?",
  choices: [3, 4, 5, 6, 7, 8],
  correctAnswer: 3
}];





var myQuestion = document.getElementById("question") //h2
var myOptions = document.getElementById("options"); //ul
var myButton = document.getElementById("nextButton");
var myQuiz = document.getElementById("quizques");


var i = 0;
var len = allQuestions.length;

function frageStellen(i) {
  var anzahlVarianten = allQuestions[i].choices.length;


  for (var j = 0; j < anzahlVarianten; j++) {


      //create radio buttons

      var option = document.createElement("li");
      var variante = document.createElement("input");
      variante.setAttribute('type', 'radio');
      variante.setAttribute('name', 'gestellteFrage' + i);
      option.setAttribute('class', '.option');
   
      var inhalt = document.createTextNode(allQuestions[i].choices[j]);


      myOptions.appendChild(option);
      option.appendChild(variante);
      option.appendChild(inhalt);
      myQuestion.innerHTML = allQuestions[i].question;
  }
}

frageStellen(0);


nextButton.onclick = function () {

  var correct = 0;
  var radioGroup = document.getElementsByName('gestellteFrage' + i);
  var ausgewaehlt = false;

 
  for (var k = 0; k < radioGroup.length; k++) {
      if (radioGroup[k].checked) {
          ausgewaehlt = true;
          if (k === allQuestions[i].correctAnswer) {
              correct++;
          }

      }

  }


  if (!ausgewaehlt) {
      alert("dude, pick one!");
      return undefined;

  }

 

  while (myOptions.firstChild) {
      myOptions.removeChild(myOptions.firstChild);
  }


 
  i++;

 

  if (i < len) {

      frageStellen(i);
  } else {
      quizBereich.removeChild(myButton);
      myQuestion.innerHTML = "Results:";

      var zeigScore = document.createElement("p");
      zeigScore.textContent = "Your score is " + correct + "/" + len;
      quizBereich.appendChild(zeigScore);
  }


}