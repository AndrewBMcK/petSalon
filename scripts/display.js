function displayCards() {
    console.log("Displaying");
    console.log(salon.pets);

    //get the DIV to display  the cards
    const DIV  = document.getElementById("pets");
    
    let card = "";
    
    //travel the array
    for( let i=0; i<salon.pets.length; i++ ) {
        let pet = salon.pets[i]; //getting pet from the array
        //create the HTML template
        //card+=`
        //<div id="${pet.petID}" class="pet">
            //<p>Name: ${pet.petName}</p>
           // <p>Age: ${pet.petAge}</p>
            //<p>Gender: ${pet.petGender}</p>
            //<p>Breed: ${pet.petBreed}</p>
            //<p>Service: ${pet.petService}</p>
           // <p>Type: ${pet.petType}</p>
            //<button class="btn btn-danger" onclick="deletePet(${pet.petID})">Delete</button>
       // </div>
       // `;
    }
    //insert the card into the register.html
    DIV.innerHTML=card;
    getTotal();
}

function getTotal() {
    const TOTAL= document.getElementById("total");
    TOTAL.innerHTML = salon.pets.length;
}
function displayTable() {
    // get the TABLE to display the cards
    const TBODY = document.getElementById("pets");
    let tr ="";
    // travel the array
    for( let i=0; i<salon.pets.length; i++ ) {
        let pet = salon.pets[i];
    // tr=``
    tr+=`
        <tr id="${pet.petID}">
            <td>${pet.petName}</td>
            <td>${pet.petAge}</td>
            <td>${pet.petGender}</td>
            <td>${pet.petBreed}</td>
            <td>${pet.petService}</td>
            <td>${pet.petType}</td>
            <td><button class="btn btn-danger" onclick="deletePet(${pet.petID})">Delete</button></td>
        </tr>
        `;
    }
    // insert the card into the register.html
    TBODY.innerHTML = tr;
    getTotal();
}