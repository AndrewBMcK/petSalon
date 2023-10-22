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

let counter = 0;
//object constructor
function Pet(name,age,gender,breed,service,type,date) {
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petType=type;
    this.petDate=date;
    this.petID=counter++;
}

//Global variables (want access to them to be able to clear them)
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputDate = document.getElementById("txtDate");

function isValid(aPet) {
    let validation = true; // assuming everying  is valid

    //remove the error style
    inputName.classList.remove("error");
    inputService.classList.remove("error");

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
        inputType.value,
        inputDate.value);

    if (isValid(newPet)==true) {
        salon.pets.push(newPet); //pushes the newPet into the array
        displayTable();
        //displayCards();
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
    inputDate.value="";
}

function deletePet(ID) {
    console.log("Deleting pet" + ID);
    let deleteIndex;
    //remove from the HTML
    document.getElementById(ID).remove();
    //remove from the array
    for(let i=0; i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(pet.petID==ID){
            deleteIndex=i;
        }
    }

    salon.pets.splice(deleteIndex,1);
    //displayCards();
    displayTable();
}

function init() {
    let scooby = new Pet("Scooby",70,"Male","Dane","Nail Trim","Dog", "12/05/2023 11:20 AM");//creating the object
    let scrappy = new Pet("Scrappy",70,"Male","Mixed", "Grooming","Dog", "11/20/2023 2:00 PM");

    salon.pets.push(scooby, scrappy);
    //displayCards();
    displayTable();
}
window.onload = init;//wait to render the html to execute init