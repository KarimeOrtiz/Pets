// object literal
// arrays []
// objects {}
let petSalon = {
    //atributes
    name:"The Fashion Pet",
    address:"Ave University 768",
    hours:{
        open: "9:00am",
        close:"6:00pm"
    },
    employees:"3",
    pets:[]
}

//counter
let c=0;
//constructor function
// ----------- Parameters / local variables ------------->
function Pet(name, age, gender, breed, service, ownerName, contactPhone, birthday){
    // attributes = parameters
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = ownerName;
    this.phone = contactPhone;
    this.birthday = birthday;
    this.id = c++;
}   

//creating the functions
function displayInfo(){
    document.getElementById("info").innerHTML = `Welcome to the ${petSalon.name} family. It is
    available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}

function displayNumberOfPets(){
    document.getElementById('number-pets').innerHTML="There are <mark> " + petSalon.pets.length + "</mark> pets in the Salon";
}

function isValid(aPet){
    let valid = true;
    if(aPet.name=="" || aPet.phone=="" || aPet.ownerName){ //is empty?
        valid = false;
    }
    return valid;
}

function register(){
    //get info from the inputs
    let petName = document.getElementById("txtPetName").value;
    let petAge = document.getElementById('txtPetAge').value;
    let petGender = document.getElementById('txtPetGender').value;
    let petBreed = document.getElementById('txtPetBreed').value;
    let petService = document.getElementById('selService').value;
    let petOwner = document.getElementById('txtPetOwner').value;
    let petPhone = document.getElementById('txtPetPhone').value;
    let petBirthday = document.getElementById('txtPetBirthday').value;
    //create the obj
    let newPet = new Pet(petName, petAge, petGender, petBreed, petService, petOwner, petPhone, petBirthday);
    if(isValid(newPet)){
        //push the obj
        petSalon.pets.push(newPet);
        //displayCardPets();
        displayPetsTable();
        console.log(petSalon.pets);
        displayNumberOfPets();
        clearInputs();
    }else{
        alert("Please enter the information");
    }
}

function clearInputs(){
    document.getElementById("txtPetName").value = "";
    document.getElementById('txtPetAge').value = "";
    document.getElementById('txtPetGender').value = "";
    document.getElementById('txtPetBreed').value = "";
    //document.getElementById('selService').value = "";
    document.getElementById('txtPetOwner').value = "";
    document.getElementById('txtPetPhone').value = "";
    //document.getElementById('txtPetBirthday').value = "";
}

function deletePet(petID){
    document.getElementById(petID).remove();
    let petIndex;
    for(let i = 0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id == petID){
            petIndex = i;
        }
    }

    petSalon.pets.splice(petIndex,1);
    displayNumberOfPets();
}

function search(){
    let petSearch = document.getElementById("txtSearch").value;
    let flag = false;
    for(let i = 0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.name.toLowerCase() == petSearch.toLowerCase()){
            document.getElementById(pet.id).classList.add("selected");
            flag = true;
        }else {
            document.getElementById(pet.id).classList.remove("selected");
        }
    }

    if(flag == false){
        alert("Is not on the list");
    }
}

function myFunction() {
    let petSearch = document.getElementById("txtSearch").value;
    for(let i = 0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.name.toLowerCase() == petSearch.toLowerCase()){
           document.getElementById(pet.id).classList.add("selected");
        }else {
           document.getElementById(pet.id).classList.remove("selected");
        }
    }
}

function init(){
    //creating objects
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Chaggy","666-666-666","2022-06-11");
    let pimpo = new Pet("Pimpo",50,"Male","Dane","Grooming","Chaggy","666-666-666", "2022-06-11");
    let tita = new Pet("Tita",50,"Male","Dane","Grooming","Chaggy","666-666-666", "2022-05-11");

    petSalon.pets.push(scooby,pimpo,tita);
    //calling the function
    //displayInfo();
    displayNumberOfPets();
    //displayCardPets();
    displayPetsTable();
    //hook events
}

window.onload = init;