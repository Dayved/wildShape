const animals =[
    {"name":"Baboon",
    "size": "small",
    "AC": 12,
    "HP": 3,
    "speed": 30,
    "climb": 30,
    "str": 8,
    "dex": 14,
    "con": 11,
    "senses":{
        "passive": 11}, 
    "CR": "0", 
    "features": {
        "Pack Tactics": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 1, "reach": 5, "damage": "1d4-1", "type": "piercing"}}},

    {"name":"Badger",
    "size": "tiny",
    "AC": 10,
    "HP": 3,
    "speed": 20,
    "burrow": 5,
    "str": 4,
    "dex": 11,
    "con": 12,
    "senses":{
        "darkvision": 30,
        "passive": 11}, 
    "CR": "0", 
    "features": {
        "Keen Smell": "The badger has advantage on Wisdom (Perception) checks that rely on smell."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 2, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Bat",
    "size": "tiny",
    "AC": 12,
    "HP": 1,
    "speed": 5,
    "fly": 30,
    "str": 2,
    "dex": 15,
    "con": 8,
    "senses":{
        "blindsight": 60,
        "passive": 11}, 
    "CR": "0", 
    "features": {
        "Echolocation.": "The bat can't use its blindsight while deafened.",
        "Keen Hearing": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 0, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Cat",
    "size": "tiny",
    "AC": 12,
    "HP": 2,
    "speed": 40,
    "climb": 30,
    "str": 3,
    "dex": 15,
    "con": 10,
    "skills": {
        "perception": 3, 
        "stealth": 4},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Keen Smell": "The cat has advantage on Wisdom (Perception) checks that rely on smell."},
    "actions": {
        "claws": {"attack": "Melee", "toHit": 0, "reach": 5, "damage": "1", "type": "slashing"}}},
    
    {"name":"Crab",
    "size": "tiny",
    "AC": 11,
    "HP": 2,
    "speed": 20,
    "swim": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "skills": {
        "stealth": 2},
    "senses":{
        "blindsight": 30,
        "passive": 9}, 
    "CR": "0", 
    "features": {
        "Amphibious": "The crab can breathe air and water."},
    "actions": {
        "claw": {"attack": "Melee", "toHit": 0, "reach": 5, "damage": "1", "type": "bludgeoning"}}},
    
    {"name":"Deer",
    "size": "medium",
    "AC": 13,
    "HP": 4,
    "speed": 50,
    "str": 11,
    "dex": 16,
    "con": 11,
    "senses":{
        "passive": 12}, 
    "CR": "0", 
    "actions": {
        "bite": {"attack": "Melee", "toHit": 2, "reach": 5, "damage": "1d4", "type": "piercing"}}},
    
    {"name":"Eagle",
    "size": "small",
    "AC": 12,
    "HP": 3,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 15,
    "con": 10,
    "skills": {
        "perception": 2},
    "senses":{
        "passive": 14}, 
    "CR": "0", 
    "features": {
        "Keen Sight": " The eagle has advantage on Wisdom (Perception) checks that rely on sight."},
    "actions": {
        "talons": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1d4+2", "type": "slashing"}}},
    
    {"name":"Frog",
    "size": "tiny",
    "AC": 11,
    "HP": 1,
    "speed": 20,
    "swim": 20,
    "str": 1,
    "dex": 13,
    "con": 8,
    "skills": {
        "perception": 1,
        "stealth": 3},
    "senses":{
        "darkvision": 30,
        "passive": 11}, 
    "CR": "0", 
    "features": {
        "Amphibious": "The frog can breathe air and water.",
        "Standing Leap": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."},
    },

    {"name":"Giant Fire Beetle",
    "size": "small",
    "AC": 13,
    "HP": 4,
    "speed": 30,
    "str": 8,
    "dex": 10,
    "con": 12,
    "senses":{
        "blindsight": 30, 
        "passive": 8}, 
    "CR": "0", 
    "features": {
        "Illumination": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 1, "reach": 5, "damage": "1d6-1", "type": "slashing"}}},
    
    {"name":"Octopus",
    "size": "small",
    "AC": 12,
    "HP": 3,
    "speed": 5,
    "swim": 30,
    "str": 4,
    "dex": 15,
    "con": 11,
    "skills": {
        "perception": 3, 
        "stealth": 4},
    "senses":{
        "darkvision": 30, 
        "passive": 12}, 
    "CR": "0", 
    "features": {
        "Hold Breath": "While out of water, the octopus can hold its breath for 30 minutes.", 
        "Underwater Camouflage": "The octopus has advantage on Dexterity (Stealth) checks made while underwater.", 
        "Water Breathing": "The octopus can breathe only underwater."},
    "actions": {
        "tentacles": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1", "type": "bludgeoning", "special": "On hit the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target."},
        "ink cloud": {"recharge": "Short or Long rest", "effect": " A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."}}},
    
    {"name":"Black Bear", 
    "size": "medium", 
    "AC": 11, 
    "HP": 19,
    "speed": 40,
    "climb": 30,
    "str": 15,
    "dex": 10,
    "con": 14,
    "skills": {
        "perception": 3}, 
    "senses":{
        "passive": 13}, 
    "CR": ".5", 
    "features": {
        "Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."},
    "actions": {
        "Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
        "bite": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1d6+2", "type": "piercing"},
        "claws": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "2d4+2", "type": "slashing"}}},
    
    {"name":"Tiger", 
    "size": "large", 
    "AC": 12, 
    "HP": 37,
    "speed": 40,
    "str": 17,
    "dex": 15,
    "con": 14,
    "skills": {
        "perception": 3,
        "stealth": 6}, 
    "senses":{
        "darkvision": 60,
        "passive": 13}, 
    "CR": "1", 
    "features": {
        "Keen Smell": "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
        "Pounce": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1d10+3", "type": "piercing"},
        "claw": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1d8+3", "type": "slashing"}}}
    ];