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
const myEstudents = [...MyArray, ...MyDeformedArray];
const nameValid = ["name", "firstName"];
const imageValid = ["avatar", "icon"];

const iterador = (array, dataName, dataImg) => {
  array.forEach((el) => {
    const $clone = $template.cloneNode(true);
    const $img = $clone.querySelector(".template-img");
    const $name = $clone.querySelector(".template-name");

    const imgUrl = dataImg.find((prop) => el.hasOwnProperty(prop)) || "";
    const name = dataName.find((prop) => el.hasOwnProperty(prop)) || "";

    $img.src = el[imgUrl];
    $name.textContent = el[name];

    $clone.querySelector(".template-description").textContent = el.title;
    $clone.querySelector(".template-buttonFollow").textContent = el.buttontext;
    $fragment.append($clone);
  });

  $array.append($fragment);
};

const representarObjetosArray = (array, dataName, dataImg) => {
  iterador(array, dataName, dataImg);
};
representarObjetosArray(myEstudents, nameValid, imageValid);
