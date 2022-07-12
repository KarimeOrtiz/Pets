function displayCardPets(){
    //travel the array for
    let card = "";
    for(let i = 0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
            <div>
                <h4>Name: ${pet.name} </h4>
                <p> Age: ${pet.age} </p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Age: ${pet.age}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.phone}</p>
            </div>
        `;
    }

    //inject the card into the HTML (register.html)
    document.getElementById("pet-cards").innerHTML=card;
}

function displayPetsTable(){
    //travel the array for
     //travel the array for
     let row = "";
    // tr+= (tr,th,td)
    for(let i = 0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        row += `
            <tr id = "${pet.id}">
                <td>${pet.name} </td>
                <td>${pet.gender} </td>
                <td>${pet.breed} </td>
                <td>${pet.age} </td>
                <td>${pet.owner}</td>
                <td>${pet.phone} </td>
                <td>${pet.birthday} </td>
                <td><button class = "btn btn-danger" onclick="deletePet(${pet.id});">Delete</button></td>
            </tr>
        `;
    }

    //inject the card into the HTML (register.html)
    document.getElementById("table-pets").innerHTML=row;
    
}