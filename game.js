const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const backButton = document.getElementById("back-button");
const progressText = document.getElementById("progress-text");
let currentQuestion = {};
let questionsAnswered = [];
let acceptingAnswers = false;
let pointsAdded = [];
let totalQuestions = 10;
let nextQuestionId = "";
let questions = [];
let classScore = {
  nk: 0,
  or: 0,
  sm: 0,
  rg: 0,
  su: 0,
  vm: 0,
  cr: 0,
  py: 0,
  as: 0,
  je: 0,
  mo: 0,
  ju: 0,
  wh: 0,
  fp: 0,
  rw: 0,
  sa: 0,
  pa: 0,
  dr: 0,
  be: 0,
  va: 0,
  le: 0,
  th: 0,
};

fetch("questions.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = [...loadedQuestions];
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

startGame = () => {
  questionsAnswered = [];
  getNewQuestion("neutral_1");
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = (nextQuestionId) => {

  progressText.innerText = `Quiz Progress ${Math.floor(questionsAnswered.length / totalQuestions *100)}%`;
  //Update the progress bar
  progressBarFull.style.width = `${
    (questionsAnswered.length / totalQuestions) * 100
  }%`;

  for (i = 0; i < questions.length; i++) {
    if (nextQuestionId == questions[i].id) {
      currentQuestion = questions[i];
      break;
    }
  }

  question.innerText = currentQuestion.questionText;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];

    // Set to hidden or not
    if (currentQuestion.choices[number - 1]) {
      choice.innerText = currentQuestion.choices[number - 1].choiceText;
      choice.parentElement.classList.remove("choice-container-hidden");
      choice.parentElement.classList.add("choice-container");
    } else {
      choice.parentElement.classList.remove("choice-container");
      choice.parentElement.classList.add("choice-container-hidden");
    }

    if(number % 2 == 1){
      choice.parentElement.classList.add("choice-odd");
    }
    else{
      choice.parentElement.classList.add("choice-even");
    }
  });

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedAnswer = e.target;
    selectedAnswer.parentElement.classList.add("selected");
    // Set selected choice object from answer number
    const selectedChoice =
      currentQuestion.choices[selectedAnswer.dataset["number"] - 1];
    const questionId = currentQuestion.id;
    questionsAnswered.push(questionId);
    if (selectedChoice.points) {
      pointsAdded.push(selectedChoice.points);
    }

    if(currentQuestion.id == "melee_2" || currentQuestion.id == "archer_2" || currentQuestion.id == "wizard_2" || currentQuestion.id == "healer_2"){
      if(selectedChoice.nextQuestionId == "mix_2"){
        totalQuestions = 11;
      }
    }

    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove("selected");
      if (
        selectedChoice.nextQuestionId &&
        selectedChoice.nextQuestionId != "end"
      ) {
        getNewQuestion(selectedChoice.nextQuestionId);
      } else {
        game.classList.add("hidden");
        loader.classList.remove("hidden");
        const chosenClass = calculateClass();
        localStorage.setItem("chosenClass", chosenClass);
        //go to the end page
        return window.location.assign("/end.html?cc=" + chosenClass);
      }
    }, 1000);
  });
});

backButton.addEventListener("click", (e) => {
  if (questionsAnswered.length == 0) {
    return window.location.assign("/index.html?");
  }
  const questionBack = questionsAnswered[questionsAnswered.length - 1];
  questionsAnswered.pop();
  if (pointsAdded.length > 0) {
    pointsAdded.pop();
  }
  console.log(questionsAnswered);
  getNewQuestion(questionBack);
});

calculateClass = () => {
  let classesToScore = [];
  pointsAdded.forEach((points) => {
    classesToScore = points.classes.split(", ");
    classesToScore.forEach((classToScore) => {
      classScore[classToScore] = classScore[classToScore] + points.value;
    });
  });
  let cs = Object.keys(classScore).reduce((a, b) =>
    classScore[a] > classScore[b] ? a : b
  );
  console.log(classScore);
  console.log(cs);
  return cs;
};