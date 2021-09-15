const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalTitle = document.getElementById('final-title');
const finalText = document.getElementById('final-text');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let classes = {};
let finalClass = {};

  fetch("classes.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedClasses) => {
    classes = {...loadedClasses};
    startEnd();
  })
  .catch((err) => {
    console.error(err);
  });

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score:mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(highScores);
};

startEnd = () => {
    let params = (new URL(document.location)).searchParams;
    let chosenClass = params.get('cc');
    finalClass = classes[chosenClass];
    finalTitle.innerText = finalClass.name;
    finalText.innerText = finalClass.text;
}