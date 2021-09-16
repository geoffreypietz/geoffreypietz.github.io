const finalTitle = document.getElementById('final-title');
const finalText = document.getElementById('final-text');

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

startEnd = () => {
    let params = (new URL(document.location)).searchParams;
    let chosenClass = params.get('cc');
    finalClass = classes[chosenClass];
    finalTitle.innerText = finalClass.name;
    finalText.innerText = finalClass.text;
}