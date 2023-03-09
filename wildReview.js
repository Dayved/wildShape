//stats level and moon circle
const mental = {INT : 0,
                WIS : 0,
                CHA : 0};
var lvl = 0;
var moon = false;
var maxCR = 0;
var prof = 2;
var wildShapes = [];

//skills
var skillList = [{name:"Acrobatics", checked: false}, {name:"Animal Handling", checked: false}, {name:"Arcana",checked: false}, {name:"Athletics",checked: false}, 
{name:"Deception", checked: false}, {name:"History", checked: false}, {name:"Insight", checked: false}, {name:"Intimidation", checked: false}, {name:"Investigation", checked: false},
{name:"Medicine", checked: false}, {name:"Nature", checked: false}, {name:"Perception", checked: false}, {name:"Performance", checked: false}, {name:"Persuasion", checked: false},
{name:"Religion", checked: false}, {name:"Sleight of Hand", checked: false}, {name:"Stealth", checked: false}, {name:"Survival", checked: false}];


//attributes
var atrList = [{name:"Strength", checked: false}, {name:"Dexterity", checked: false}, {name:"Constitution",checked: false},
{name:"Intelligence", checked: false}, {name:"Wisdom", checked: false}, {name:"Charisma", checked: false}];

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
        skillList[i].checked = check(skillList[i].name);
    }
}

//check for checked saves
function getAttributes(atrList) {
    for (var i = 0; i < atrList.length; i++) {
        atrList[i].checked = check(atrList[i].name);
    }
}

//get proficiency
function getProf(level) {
    return 1+Math.ceil(level/4);
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

//make CR's fraction
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

//function to calculate ability modifiers
function findMod(stat){
    return parseInt((stat - 10) / 2)
}

//take chosen animal and build table with correct stats
function displayWildShape(displayTable, chosen){
    //var count = Object.keys(chosen).length; //get how many keys a chosen animal has 
    document.getElementById("animalname").value = chosen.Name;

    // for every attribiute
    for (var i = 0; i < atrList.length; i++){
        atr = atrList[i].name.slice(0,3).toLowerCase(); // find the lower case abbreviations
        
        
        if (i < 3){ // if the attribute is STR, DEX, or CON use animal stats. Else use mental stats from player
            document.getElementById(atr + "score").value = chosen[atr.toUpperCase()]; // make abbreviation uppercase to find stats
            document.getElementById(atr + "mod").value = findMod(chosen[atr.toUpperCase()]);
        }else{
            document.getElementById(atr + "score").value = mental[atr.toUpperCase()];
            document.getElementById(atr + "mod").value = findMod(mental[atr.toUpperCase()]);
        }
    }
    
}

function initApplication() {
    var vertMenu = document.getElementById("vertical-menu");
    var displayTable = document.getElementById("display");
    var elementalMenu = document.getElementById("elemental-menu");
    //this command makes sure the order of the variable is kept-
    //js tries to sort it alphabetically and I dont want that
    var animals = JSON.parse(beasts);
    var elementals = JSON.parse(elements);

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
            //add mental stats given by user

            mental.INT = tempIntel;
            mental.WIS = tempWis;
            mental.CHA = tempCha;
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

        //check to see if a moon circle druid is high enough level for elemantal selection
        if (lvl >= 10 && moon){

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