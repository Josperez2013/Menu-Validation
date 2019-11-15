var inputName = document.getElementById("inputName");
var inputPass = document.getElementById("inputPassword");
//Global notes variable 
var notes = [
  {
    text:"This is the first note, most important",
    importance:5,
    date:1
  },
  {
    text:"This is the third note, very important",
    importance:1,
    date:3
  },
  {
    text:"This is the second note, kind of important",
    importance:1,
    date:2
  }
];

function submission() {
  var obj = {
    name: inputName.value,
    pass: inputPass.value
  };
 wrapper.innerHTML="Successfully logged in"
}



function app(){
  var pages=["Home","Display Notes", "Add Notes"];
  init();
  nav(pages);
  renderPage();
}

function init(){
  var nav =  document.createElement("nav");
  nav.classList.add("nav");
  var wrapper =  document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
 
}

function nav(list) {
  for(var i=0; i<list.length; i++){
    const button =document.createElement("button");
    const val = list[i];
    button.innerHTML=list[i];
    button.addEventListener("click", function(){
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page){
  if(page==="Display Notes"){
     displayNotes();     
       
     }else if(page==="Add Notes"){
      addNotes();
     }else if(page==="Home"){
       home();
     }
}


function home(){
    wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML="This is the home page"
}

function displayNotes(){
  wrapper = document.querySelector(".wrapper")
  wrapper.innerHTML="Here are your notes.";
 
  var sortBy = [
  {
    prop: "importance",
    direction: -1
  },
  {
    prop: "text",
    direction: 1
  }
];
  
  notes.sort(function(a, b) {
  let i = 0,
    result = 0;
  while (i < sortBy.length && result === 0) {
    result =
      sortBy[i].direction *
      (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
        ? -1
        : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0);
    i++;
  }
  return result;
});
  
  //displaying
  for(var i=0; i < notes.length; i++){
    var ele = document.createElement("div");
    ele.innerHTML=notes[i].text;
    wrapper.appendChild(ele);
    
  }
 
  
}

function addNotes(){
    wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML="Add a note" 
}


function logIn(){
  wrapper.innerHTML="You have logged in."
}
document.body.querySelector(".button").addEventListener("click", function() {
  if (inputName==="coolStudent123" && inputPassword==="coolPassword") {
    logIn();
  } else {
    if (inputName!=="coolStudent123" && inputPassword==="coolPassword") {
      wrapper.innerHTML="Incorrect Username.";
    } else if (inputName==="coolStudent123" && inputPassword!=="coolPassword") {
      wrapper.innerHTML="Incorrect Password.";
    } else {
      wrapper.innerHTML="Incorrect, type something.";
    }
  }
});
 

function addAnote(){
  var obj = {
    Note: inputNote.value,
    Importance: inputImport.value
  };
  notes.push(obj);
}


app();