//Step 5
// console.log("Hello World"); 

let xp = 0; //Step 6, 7
let health = 100; //Step 8
let gold = 50; //Step 8
let currentWeapon = 0; //Step 9
let fighting; //Step 10
let monsterHealth; //Step 11
//let inventory = ["stick", "dagger", "sword"]; //Step 11, 12, 13
let inventory = ["stick"]; //Step 14
//let button1 = document.querySelector("#button1"); //Step 19
const button1 = document.querySelector("#button1"); //Step 21
const button2 = document.querySelector("#button2"); //Step 22
const button3 = document.querySelector("#button3"); //Step 22
const text = document.querySelector("#text"); //Step 33
const xpText = document.querySelector("#xpText"); //Step 33
const healthText = document.querySelector("#healthText"); //Step 33
const goldText = document.querySelector("#goldText"); //Step 33
const monsterStats = document.querySelector("#monsterStats"); //Step 33
const monsterName = document.querySelector("#monsterName"); //Step 33
const monsterHealthText = document.querySelector("#monsterHealth"); //Step 34

//Step 51, 52, 53, 54, 55, 56, 57, 58, 70
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    }
]; //Step 51, 52, 53, 54, 55, 56, 57, 58, 70


// initialize buttons //Step 39, 40, 41

button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon; 


//Step 50, 59, 63, 64, 65, 66, 67
function update(location) {
    //button1.innerText = "Go to store";
    button1.innerText = location["button text"][0];
    //button2.innerText = "Go to cave";
    button2.innerText = location["button text"][1];
    //button3.innerText = "Fight dragon";
    button3.innerText = location["button text"][2];
    //button1.onclick = goStore;
    button1.onclick = location["button functions"][0];
    //button2.onclick = goCave;
    button2.onclick = location["button functions"][1];
    //button3.onclick = fightDragon;
    button3.onclick = location["button functions"][2];
    //text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    text.innerText = location.text;
}

//Step 47, 48, 49, 59(remove all code from func), 60, 61, 62
function goTown() {
    update(locations[0]);
    // button1.innerText = "Go to store";
    // button2.innerText = "Go to cave";
    // button3.innerText = "Fight dragon";
    // button1.onclick = goStore;
    // button2.onclick = goCave;
    // button3.onclick = fightDragon;
    // text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}


//Step 35, 36, 42, 44, 45, 59(remove all code from func), 68
function goStore() {
    update(locations[1]);
// console.log("Going to store.");
//   button1.innerText = "Buy 10 health (10 gold)";
//   button1.onclick = buyHealth;
//   button2.innerText = "Buy weapon (30 gold)";
//   button2.onclick = buyWeapon;
//   button3.innerText = "Go to town square";
//   button3.onclick = goTown;
//   text.innerText = "You enter the store.";
}

//Step 37, 71
function goCave() {
    //console.log("Going to cave.");
    update(locations[2]);
}

//Step 38
function fightDragon() {
    console.log("Fighting dragon.");
}

//Step 46
function buyHealth() {

}

//Step 46
function buyWeapon() {

}

//Step 46
//function goTown() {
//}

//Step 69
function fightSlime() {

}

//Step 69
function fightBeast() {
  
}

