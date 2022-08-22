//stats level and moon circle
var intel = 0;
var wis = 0;
var cha = 0;
var lvl = 0;
var moon = false;
var maxCR = 0;

//skills
var skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation",
                 "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"];
var skillChecked = [false, false, false, false, false, false, false, false, false, 
                    false, false, false, false, false, false, false, false,];

$(document).ready(initApplication);

//function to see if things are checked
function check(skill){
    return document.getElementById(skill).checked;
}

//funtion to get elements
function getEl(thing){
    return document.getElementById(thing).value
 }

 //function to check for checked skills
function getSkills(skillList){
    for(var i = 0; i < skillList.length; i++){
        skillChecked[i] = check(skillList[i]);
    }
    }

function initApplication(){
    
    document.getElementById("submit").addEventListener("click", function(){
    var tempIntel = parseInt(getEl("int"));
    var tempWis = parseInt(getEl("wis"));
    var tempCha = parseInt(getEl("cha"));
    var tempLvl = parseInt(getEl("lvl"));
    var tempMoon = check("moon");
    
    //check int wis and cha for numbers
    if (isNaN(tempIntel) || isNaN(tempWis) || isNaN(tempCha)){
        alert("Intelligence, Wisdom, Charisma and level should be a number");
    }
    //check they are in the right range
    else if ((tempIntel < 0 || tempIntel > 24) || (tempWis < 0 || tempWis > 24) || (tempCha < 0 || tempCha > 24)){
        alert("Intelligence, Wisdom, and Charisma should be a number between 0 and 24");
    }
    //check level is a number
    else if (isNaN(tempLvl)){
        alert("Level should be a number");
    }
    //check level is in the right range
    else if (tempLvl < 2 || tempLvl > 20){
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

    function findMaxCR(level){
        var CR = 0;

        //formula for druid wild shape Calculation
        if (moon){
            if(level < 6){
                CR = 1;
            }
            else {
                CR = parseInt(level / 3);
            }
        }
        else {
            if (level < 4){
                CR = .25;
            }
            else if (level < 8){
                CR = .5;
            }
            else {
                CR = 1;
            }
        }

        return CR;
    }

    //console.log("CR: " + findMaxCR(lvl));
    maxCR = findMaxCR(lvl);
    
    getSkills(skillList);
    /*for(var i = 0; i < skillList.length; i++){
        console.log(skillList[i] + ": " + skillChecked[i]);
    }*/
});
}


