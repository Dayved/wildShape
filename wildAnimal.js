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
    "CR": ".25", 
    "features": {
        "Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."},
    "actions": {
        "Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
        "bite": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1d6+2", "type": "piercing"},
        "claws": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "2d4+2", "type": "slashing"}}}
    ];