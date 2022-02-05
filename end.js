const finalTitle = document.getElementById('final-title');
const finalText = document.getElementById('final-text');
const finalImage = document.getElementById('final-image');

const asEmail = document.getElementById('as-email');
const beEmail = document.getElementById('be-email');
const crEmail = document.getElementById('cr-email');
const drEmail = document.getElementById('dr-email');
const fpEmail = document.getElementById('fp-email');
const jeEmail = document.getElementById('je-email');
const juEmail = document.getElementById('ju-email');
const leEmail = document.getElementById('le-email');
const moEmail = document.getElementById('mo-email');
const nkEmail = document.getElementById('nk-email');
const orEmail = document.getElementById('or-email');
const paEmail = document.getElementById('pa-email');
const pyEmail = document.getElementById('py-email');
const rgEmail = document.getElementById('rg-email');
const rwEmail = document.getElementById('rw-email');
const saEmail = document.getElementById('sa-email');
const smEmail = document.getElementById('sm-email');
const suEmail = document.getElementById('su-email');
const thEmail = document.getElementById('th-email');
const vmEmail = document.getElementById('vm-email');
const vaEmail = document.getElementById('va-email');
const whEmail = document.getElementById('wh-email');

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

    setClassImageAndEmail(chosenClass);
}

setClassImageAndEmail = (cc) => {
  if(cc == "as"){
    asEmail.classList.remove("hidden");
    finalImage.src="/img/Assassin.jpg";
  }
  if(cc == "be"){
    beEmail.classList.remove("hidden");
    finalImage.src="/img/Berserk.jpg";
  }
  if(cc == "cr"){
    crEmail.classList.remove("hidden");
    finalImage.src="/img/Cryomancer.jpg";
  }
  if(cc == "dr"){
    drEmail.classList.remove("hidden");
    finalImage.src="/img/Druid.jpg";
  }
  if(cc == "fp"){
    fpEmail.classList.remove("hidden");
    finalImage.src="/img/Fallen Paladin.jpg";
  }
  if(cc == "je"){
    jeEmail.classList.remove("hidden");
    finalImage.src="/img/Jester.jpg";
  }
  if(cc == "ju"){
    juEmail.classList.remove("hidden");
    finalImage.src="/img/Judge.jpg";
  }
  if(cc == "le"){
    leEmail.classList.remove("hidden");
    finalImage.src="/img/Legion.jpg";
  }
  if(cc == "mo"){
    moEmail.classList.remove("hidden");
    finalImage.src="/img/Monk.jpg";
  }
  if(cc == "nk"){
    nkEmail.classList.remove("hidden");
    finalImage.src="/img/Nether Knight.jpg";
  }
  if(cc == "or"){
    orEmail.classList.remove("hidden");
    finalImage.src="/img/Oracle.jpg";
  }
  if(cc == "pa"){
    paEmail.classList.remove("hidden");
    finalImage.src="/img/Pal.jpg";
  }
  if(cc == "py"){
    pyEmail.classList.remove("hidden");
    finalImage.src="/img/Pyro.jpg";
  }
  if(cc == "rg"){
    rgEmail.classList.remove("hidden");
    finalImage.src="/img/Royal Guard.jpg";
  }
  if(cc == "rw"){
    rwEmail.classList.remove("hidden");
    finalImage.src="/img/RWitch.jpg";
  }
  if(cc == "sa"){
    saEmail.classList.remove("hidden");
    finalImage.src="/img/Sage.jpg";
  }
  if(cc == "sm"){
    smEmail.classList.remove("hidden");
    finalImage.src="/img/Samurai.jpg";
  }
  if(cc == "su"){
    suEmail.classList.remove("hidden");
    finalImage.src="/img/Summoner.jpg";
  }
  if(cc == "th"){
    thEmail.classList.remove("hidden");
    finalImage.src="/img/Thief_circle.jpg";
  }
  if(cc == "vm"){
    vmEmail.classList.remove("hidden");
    finalImage.src="/img/VAMP.jpg";
  }
  if(cc == "va"){
    vaEmail.classList.remove("hidden");
    finalImage.src="/img/Van.jpg";
  }
  if(cc == "wh"){
    whEmail.classList.remove("hidden");
    finalImage.src="/img/Witch Hunter.jpg";
  }
}
