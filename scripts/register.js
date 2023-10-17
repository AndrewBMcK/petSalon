//obj literal
let salon = {
    name:"the fasion pet",
    adress:{
        street:"Palm",
        number:"262",
        zip: "22117"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[] //array
}

//object constructor
function Pet(name,age,gender,breed,service,type) {
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petType=type;
}

//Global variables (want access to them to be able to clear them)
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function isValid(aPet) {
    let validation = true; // assuming everying  is valid
    if (aPet.petName =="") {
        //if i get here it's not valid
        validation = false;
        inputName.classList.add("error");
    }
    if (aPet.petService =="") {
        //if i get here it's not valid
        validation = false;
        inputService.classList.add("error");
    }


    return validation;
}

function register() {
    console.log("Registering...");
    //get the values from the form

    //create the newPet object
    let newPet = new Pet(
        inputName.value,
        inputAge.value, 
        inputGender.value, 
        inputBreed.value,
        inputService.value,
        inputType.value);

    if (isValid(newPet)==true) {
        salon.pets.push(newPet); //pushes the newPet into the array
        displayCards();
        //display on the console
        clearInput();
    }        
}

function clearInput() {
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
}

function init() {
    let scooby = new Pet("Scooby",70,"Male","Dane","Nail Trim","Dog");//creating the object
    let scrappy = new Pet("Scrappy",70,"Male","Mixed", "Grooming","Dog");

    salon.pets.push(scooby, scrappy);
    displayCards();
}
window.onload = init;//wait to render the html to execute init

