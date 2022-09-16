//stats level and moon circle
var intel = 0;
var wis = 0;
var cha = 0;
var lvl = 0;
var moon = false;
var maxCR = 0;
var prof = 2;
var wildShapes = [];

//skills
var skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation",
    "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
var skillChecked = [false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,];

//attributes
var atrList = ["Strength", "Dexterity", "Constitution",
    "Intelligence", "Wisdom", "Charisma"];
var atrChecked = [false, false, false,
    false, false, false]

$(document).ready(initApplication);

//function to see if things are checked
function check(skill) {
    return document.getElementById(skill).checked;
}

//funtion to get elements with values
function getEl(thing) {
    return document.getElementById(thing).value
}

//function to check for checked skills
function getSkills(skillList) {
    for (var i = 0; i < skillList.length; i++) {
        skillChecked[i] = check(skillList[i]);
    }
}

//check for checked saves
function getAttributes(atrList) {
    for (var i = 0; i < atrList.length; i++) {
        atrChecked[i] = check(atrList[i]);
    }
}

//get proficiency
function getProf(level) {
    if (level < 5) {
        return 2;
    }
    else if (level < 9) {
        return 3;
    }
    else if (level < 13) {
        return 4;
    }
    else if (level < 17) {
        return 5;
    }
    else {
        return 6;
    }
}

//formula for druid max CR wild shape Calculation
function findMaxCR(level) {
    var CR = 0;

    if (moon) {
        if (level < 6) {
            CR = 1;
        }
        else {
            CR = parseInt(level / 3);
        }
    }
    else {
        if (level < 4) {
            CR = .25;
        }
        else if (level < 8) {
            CR = .5;
        }
        else {
            CR = 1;
        }
    }

    return CR;
}

//make CR s fraction
function convertCR(CR) {
    if (CR == ".125") {
        return "1/8";
    }
    else if (CR == ".25") {
        return "1/4";
    }
    else if (CR == ".5") {
        return "1/2";
    }
    else {
        return CR;
    }
}

//take chosen animal and build table with correct stats
function displayWildShape(displayTable, chosen){
    var count = Object.keys(chosen).length;
    for (let key of Object.keys(chosen)){
        console.log(key);
        var row = displayTable.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = key;
    }
}

function initApplication() {
    var vertMenu = document.getElementById("vertical-menu");
    var displayTable = document.getElementById("display");
    //this command makes sure the order of the variable is kept-
    //js tries to sort it alphabetically and I dont want that
    var animals = JSON.parse(beasts);

    document.getElementById("submit").addEventListener("click", function () {
        var tempIntel = parseInt(getEl("int"));
        var tempWis = parseInt(getEl("wis"));
        var tempCha = parseInt(getEl("cha"));
        var tempLvl = parseInt(getEl("lvl"));
        var tempMoon = check("moon");

        //check int wis and cha for numbers
        if (isNaN(tempIntel) || isNaN(tempWis) || isNaN(tempCha)) {
            alert("Intelligence, Wisdom, and Charisma should be a number");
        }
        //check they are in the right range
        else if ((tempIntel < 0 || tempIntel > 24) || (tempWis < 0 || tempWis > 24) || (tempCha < 0 || tempCha > 24)) {
            alert("Intelligence, Wisdom, and Charisma should be a number between 0 and 24");
        }
        //check level is a number
        else if (isNaN(tempLvl)) {
            alert("Level should be a number");
        }
        //check level is in the right range
        else if (tempLvl < 2 || tempLvl > 20) {
            alert("Level should be a number between 2 and 20");
        }
        else {
            //print to console to check
            /* console.log("int: " + tempIntel);
             console.log("wis: " + tempWis);
             console.log("cha: " + tempCha);
             console.log("Level: " + tempLvl);
             console.log("Moon: " + tempMoon);*/

            intel = tempIntel;
            wis = tempWis;
            cha = tempCha;
            lvl = tempLvl;
            moon = tempMoon;
        }

        //console.log("CR: " + findMaxCR(lvl));
        maxCR = findMaxCR(lvl);

        getSkills(skillList);
        getAttributes(atrList);
        prof = getProf(lvl);

        var tempShapes = [];
        //wildshape filter of animals according to CR, fly, and swim
        for (let i = 0; i < animals.length; i++) {
            if (parseFloat(animals[i].CR) <= maxCR) {
                if (lvl > 7) {
                    tempShapes.push(animals[i]);
                }
                else if (lvl > 3) {
                    if (typeof animals[i].Fly === "undefined") {
                        tempShapes.push(animals[i]);
                    }
                    else {
                        continue;
                    }
                }
                else {
                    if (typeof animals[i].Fly === "undefined" && typeof animals[i].Swim === "undefined") {
                        tempShapes.push(animals[i]);
                    }
                    else {
                        continue;
                    }
                }
            }
        }
        //console.log(tempShapes);
        wildShapes = tempShapes;

        //clear vert menu of previous entires
        while (vertMenu.hasChildNodes()) {
            vertMenu.removeChild(vertMenu.firstChild);
        }
        //populate vert menu with relevanet entries
        for (let i = 0; i < wildShapes.length; i++) {
            const animal = document.createElement("a");
            const animalInfo = document.createTextNode(wildShapes[i].Name + " CR:" + convertCR(wildShapes[i].CR));
            animal.appendChild(animalInfo);
            vertMenu.appendChild(animal);
        }

    });//submit ends

    //highlight the selected element on the vert menu
    vertMenu.addEventListener("click", function (event) {
        for (let i = 0; i < vertMenu.children.length; i++) {
            vertMenu.children[i].className = "inactive";
        }
        //get selected item
        var pick = event.target.textContent;
        //console.log(pick);
        event.target.classList.toggle("active");
        var aniPick = pick.split(" CR");
        var chosen;
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].Name == aniPick[0]) {
                chosen = animals[i];
            }
        }
        //console.log(chosen);

        displayWildShape(displayTable, chosen);
    });//vertmenu ends

}