const MyArray = [
  {
    name: "Jonh Smith",
    title: "Newbie Programer",
    buttontext: "Follow",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    name: "Alesha Doe",
    title: "FullStack Programer",
    buttontext: "Add Friend",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    name: "Jessica Jones",
    title: "Copywriter",
    buttontext: "View Text",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
];

const MyDeformedArray = [
  {
    firstName: "Juanse Laverde",
    title: "Singer",
    buttontext: "Sing",
    icon: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    firstName: "Alesha Doe",
    title: "Newbie",
    buttontext: "Add Oil",
    icon: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    firstName: "Jonas Uala",
    title: "Lier",
    buttontext: "View Text",
    icon: "https://reqres.in/img/faces/11-image.jpg",
  },
];

const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();
const $array = document.getElementById("array");
const nameValid = ["name", "firstName"];
const imageValid = ["avatar", "icon"];

const normalize = (arrayToNormalize1, arrayToNormalize2, dataName, dataImg) => {
  const normalizedArr1 = arrayToNormalize1.map((el) => ({
    name: el.hasOwnProperty(dataName[0]) ? el[dataName[0]] : "",
    title: el.title,
    buttontext: el.buttontext,
    icon: el.hasOwnProperty(dataImg[0]) ? el[dataImg[0]] : "",
  }));

  const normalizedArr2 = arrayToNormalize2.map((el) => ({
    name: el.hasOwnProperty(dataName[1]) ? el[dataName[1]] : "",
    title: el.title,
    buttontext: el.buttontext,
    icon: el.hasOwnProperty(dataImg[1]) ? el[dataImg[1]] : "",
  }));

  const myEstudens = [...normalizedArr1, ...normalizedArr2];
  return myEstudens;
};

const myEstudents = normalize(MyArray, MyDeformedArray, nameValid, imageValid);

const representarObjetosArray = (arrayToRepresent) => {
  arrayToRepresent.forEach((el) => {
    const $clone = $template.cloneNode(true);
    const $img = $clone.querySelector(".template-img");
    const $name = $clone.querySelector(".template-name");
    const imgUrl = el.icon;
    const name = el.name;
    $img.src = el.icon;
    $name.textContent = el.name;
    $clone.querySelector(".template-description").textContent = el.title;
    $clone.querySelector(".template-buttonFollow").textContent = el.buttontext;
    $fragment.append($clone);
  });

  $array.append($fragment);
};

representarObjetosArray(myEstudents);
