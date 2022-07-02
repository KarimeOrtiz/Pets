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
    pets:[
        { //anonymous objects
            name: "Pimpo",
            age: 50,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownerName: "Diana",
            contactPhone: "666-666-666"
        },
        {
            name: "Tita",
            age: 40,
            breed: "Mixed",
            gender: "Male",
            service: "Vaccine",
            ownerName: "Shaggy",
            contactPhone: "666-666-666"
        },
        {
            name: "Scrappy",
            age: 50,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownerName: "Diana",
            contactPhone: "666-666-666"
        },
        {
            name: "Speedy",
            age: 80,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownerName: "Diana",
            contactPhone: "666-666-666"
        } 
    ]
}

//console.log(petSalon.pets)

for(let i = 0; i<petSalon.pets.length; i++){
    console.log(petSalon.pets[i].name);
}

alert("There are " + petSalon.pets.length + " pets in the Salon");

function displayInfo(){
    document.getElementById("info").innerHTML = `Welcome to the ${petSalon.name} family. It is
    available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}

displayInfo();