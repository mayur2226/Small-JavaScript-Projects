// console.log("hii");

showNotes();
var today  = new Date();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    notesObj = localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notes)
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
          <p>${today}</p>
        </div>
      </div>`

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show`;
    }

}
function deleteNote(index) {
    // console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    notesObj = localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log("input given", inputVal);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt)
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })


});

function dark(){
   if(document.querySelector('#darkb').innerText = "Light theme"){
       document.querySelector('#dark').style.background = 'white';
       document.querySelector('#dark').style.color = 'black';
       document.querySelector('#darkb').innerText= "Dark Theme";
   }
   document.querySelector('#dark').style.background='black';
   document.querySelector('#dark').style.color='white';
   document.querySelector('#darkb').innerText ="Light theme"; 
   
}

class Employee{
    constructor(givenName,givenExperience,givenDept){
        this.name=givenName;
        this.experience=givenExperience;
        this.dept = givenDept;
    }
    slogan(){
        return `I am ${this.name} and this company is best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    static add(a,b){
        return a + b;
    }
}

let mayuresh = new Employee("mayur",5,"IT");
console.log(mayuresh);
console.log(mayuresh.slogan());
console.log(mayuresh.joiningYear());

class Programer extends Employee{
    constructor(givenName,givenExperience,givenDept,language){
        super(givenName,givenExperience,givenDept);
        this.lang = language;
    }
}

let raj = new Programer("raj",6,"IT","python");
console.log(raj);
console.log(raj.joiningYear());
console.log(raj.slogan());