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
        card+=`
        <div class="pet">
            <p>Name: ${pet.petName}</p>
            <p>Age: ${pet.petAge}</p>
            <p>Gender: ${pet.petGender}</p>
            <p>Breed: ${pet.petBreed}</p>
            <p>Service: ${pet.petService}</p>
            <p>Type: ${pet.petType}</p>
        </div>
        `;
    }
    //insert the card into the register.html
    DIV.innerHTML=card;
}