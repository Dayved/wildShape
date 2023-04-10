//stats level and moon circle
const mental = {WIS : 0,
                INT : 0,
                CHA : 0};
var lvl = 0;
var moon = false;
var maxCR = 0;
var prof = 2;
var wildShapes = [];

//skills
var skillList = [{name:"Acrobatics", checked: false, assocSkill: "DEX"}, {name:"Animal Handling", checked: false, assocSkill: "WIS"}, {name:"Arcana",checked: false, assocSkill: "INT"}, 
{name:"Athletics",checked: false, assocSkill: "STR"}, {name:"Deception", checked: false, assocSkill: "CHA"}, {name:"History", checked: false, assocSkill: "INT"}, 
{name:"Insight", checked: false, assocSkill: "WIS"}, {name:"Intimidation", checked: false, assocSkill: "CHA"}, {name:"Investigation", checked: false, assocSkill: "INT"},
{name:"Medicine", checked: false, assocSkill: "WIS"}, {name:"Nature", checked: false, assocSkill: "INT"}, {name:"Perception", checked: false, assocSkill: "WIS"}, 
{name:"Performance", checked: false, assocSkill: "CHA"}, {name:"Persuasion", checked: false, assocSkill: "CHA"},{name:"Religion", checked: false, assocSkill: "INT"},
{name:"Sleight of Hand", checked: false, assocSkill: "DEX"}, {name:"Stealth", checked: false, assocSkill: "DEX"}, {name:"Survival", checked: false, assocSkill: "WIS"}];


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
function displayWildShape(chosen){
    // set name of animal on the character sheet
    document.getElementById("creatureName").value = chosen.Name;
    document.getElementById("proficiencybonus").value = "+ " + prof;
    document.getElementById("ac").value = chosen.AC;
    
    // calculate passive perception; check if proficient and if animal passive is higher
    var pass = 10 + findMod(mental.WIS);
    if (document.getElementById("Wisdom").checked){
        pass += prof;
    }

    if (chosen.Senses.Passive > pass){
        pass = chosen.Senses.Passive;
    }
    
    document.getElementById("passiveperception").value = pass;


    // for every attribiute set the scores of animal and player stats
    for (var i = 0; i < atrList.length; i++){
        atr = atrList[i].name.slice(0,3).toLowerCase(); // find the lower case abbreviations        
        
        if (i < 3){ // if the attribute is STR, DEX, or CON use animal stats. 
            document.getElementById(atr + "score").value = chosen[atr.toUpperCase()]; // make abbreviation uppercase to find stats
            document.getElementById(atr + "mod").value = findMod(chosen[atr.toUpperCase()]);

            // if that attrubute save is checked add proficiency to total, else just use ability modifier
            if (atrList[i].checked){
                document.getElementById(atr + "save").value = prof + findMod(chosen[atr.toUpperCase()]);
                document.getElementById(atr + "box").checked = true;
            }
            else {
                document.getElementById(atr + "save").value = findMod(chosen[atr.toUpperCase()]);
                document.getElementById(atr + "box").checked = false;
            }

        }else{  // Else use mental stats from player
            document.getElementById(atr + "score").value = mental[atr.toUpperCase()];
            document.getElementById(atr + "mod").value = findMod(mental[atr.toUpperCase()]);      

            if (atrList[i].checked){
                document.getElementById(atr + "save").value = prof + findMod(mental[atr.toUpperCase()]);
                document.getElementById(atr + "box").checked = true;
            }
            else {
                document.getElementById(atr + "save").value = findMod(mental[atr.toUpperCase()]);
                document.getElementById(atr + "box").checked = false;
            }
        }
    }

    // check if the user checked the skills as proficient then assign mod appropriate for mental or physical stat
    for (var i = 0; i < skillList.length; i++){  
        foundSkill = skillList[i].assocSkill;
        if (foundSkill === "WIS" || foundSkill === "INT" || foundSkill ==="CHA"){ // mental
            if (document.getElementById(skillList[i].name).checked){
                document.getElementById(skillList[i].name + "-prof").checked = true;
                document.getElementById(skillList[i].name + "-check").value = findMod(mental[skillList[i].assocSkill]) + prof; 
            }
            else{
                document.getElementById(skillList[i].name + "-prof").checked = false;
                document.getElementById(skillList[i].name + "-check").value = findMod(mental[skillList[i].assocSkill]); 
            }
        }
        else{ // physical
            if (document.getElementById(skillList[i].name).checked){
                document.getElementById(skillList[i].name + "-prof").checked = true;
                document.getElementById(skillList[i].name + "-check").value = findMod(chosen[skillList[i].assocSkill]) + prof; 
            }
            else{
                document.getElementById(skillList[i].name + "-prof").checked = false;
                document.getElementById(skillList[i].name + "-check").value = findMod(chosen[skillList[i].assocSkill]); 
            }
        }
    }
    
}

function initApplication() {
    var vertMenu = document.getElementById("vertical-menu");
    var elemMenu = document.getElementById("elemental-menu");
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

        //clear vert animal menu of previous entires
        while (vertMenu.hasChildNodes()) {
            vertMenu.removeChild(vertMenu.firstChild);
        }

        //clear vert elemental menu of previous entires
        while (elemMenu.hasChildNodes()) {
            elemMenu.removeChild(elemMenu.firstChild);
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
            //populate vert menu with relevanet entries
            for (let i = 0; i < 4; i++) {
                const elem = document.createElement("a");
                const elemInfo = document.createTextNode(elementals[i].Name + " CR:" + convertCR(elementals[i].CR));
                elem.appendChild(elemInfo);
                elemMenu.appendChild(elem);
            }
        } else {
            const empty = document.createElement("a");
            const txt = document.createTextNode("Elementals");
            empty.appendChild(txt);
            elemMenu.appendChild(empty);
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

        displayWildShape(chosen);
    });//vertmenu ends

    //highlight the selected element on the elements menu
    elemMenu.addEventListener("click", function (event) {
        for (let i = 0; i < elemMenu.children.length; i++) {
            elemMenu.children[i].className = "inactive";
        }
        //get selected item
        var pick = event.target.textContent;
        //console.log(pick);
        event.target.classList.toggle("active");
        var elemPick = pick.split(" CR");
        var chosen;
        for (let i = 0; i < elementals.length; i++) {
            if (elementals[i].Name == elemPick[0]) {
                chosen = elementals[i];
            }
        }

        displayWildShape(chosen);
    });//vertmenu ends
}