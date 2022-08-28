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
    
    {"name":"Goat",
    "size": "medium",
    "AC": 10,
    "HP": 4,
    "speed": 40,
    "str": 12,
    "dex": 10,
    "con": 11,
    "senses":{
        "passive": 10}, 
    "CR": "0", 
    "features": {
        "Charge": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
        "Sure-Footed": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."},
    "actions": {
        "ram": {"attack": "Melee", "toHit": 3, "reach": 5, "damage": "1d4+1", "type": "bludgeoning"}}},
    
    {"name":"Hawk",
    "size": "tiny",
    "AC": 13,
    "HP": 1,
    "speed": 10,
    "fly": 60,
    "str": 5,
    "dex": 16,
    "con": 8,
    "skills": {
        "perception": 4},
    "senses":{
        "passive": 14}, 
    "CR": "0", 
    "features": {
        "Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."},
    "actions": {
        "talons": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1", "type": "slashing"}}},
    
    {"name":"Hyena",
    "size": "medium",
    "AC": 11,
    "HP": 5,
    "speed": 50,
    "str": 11,
    "dex": 13,
    "con": 12,
    "skills": {
        "perception": 3},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Pack Tactics": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 2, "reach": 5, "damage": "1d6", "type": "piercing"}}},
    
    {"name":"Jackal",
    "size": "small",
    "AC": 12,
    "HP": 3,
    "speed": 40,
    "str": 8,
    "dex": 15,
    "con": 11,
    "skills": {
        "perception": 3},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Keen Hearing and Smell": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
        "Pack Tactics": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 1, "reach": 5, "damage": "1d4-1", "type": "piercing"}}},

    {"name":"Lizard",
    "size": "tiny",
    "AC": 10,
    "HP": 2,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "senses":{
        "darkvision": 30,
        "passive": 9}, 
    "CR": "0", 
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
    
    {"name":"Owl",
    "size": "tiny",
    "AC": 11,
    "HP": 1,
    "speed": 5,
    "fly": 60,
    "str": 3,
    "dex": 13,
    "con": 8,
    "skills": {
        "perception": 4,
        "stealth": 3},
    "senses":{
        "darkvision":120,
        "passive": 14}, 
    "CR": "0", 
    "features": {
        "Flyby": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
        "Keen Hearing and Sight": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."},
    "actions": {
        "talons": {"attack": "Melee", "toHit": 3, "reach": 5, "damage": "1", "type": "slashing"}}},
    
    {"name":"Quiper",
    "size": "tiny",
    "AC": 13,
    "HP": 1,
    "speed": 0,
    "swim": 40,
    "str": 2,
    "dex": 16,
    "con": 9,
    "senses":{
        "darkvision":60,
        "passive": 8}, 
    "CR": "0", 
    "features": {
        "Blood Frenzy": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
        "Water Breathing": "The quipper can breathe only underwater."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Rat",
    "size": "tiny",
    "AC": 10,
    "HP": 1,
    "speed": 20,
    "str": 2,
    "dex": 11,
    "con": 9,
    "senses":{
        "darkvision":30,
        "passive": 10}, 
    "CR": "0", 
    "features": {
        "Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell."},
    "actions": {
        "bite": {"attack": "Melee", "toHit": 0, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Raven",
    "size": "tiny",
    "AC": 12,
    "HP": 1,
    "speed": 10,
    "fly": 50,
    "str": 2,
    "dex": 14,
    "con": 8,
    "skills": {
        "perception": 3},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Mimicry": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."},
    "actions": {
        "beak": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Scorpion",
    "size": "tiny",
    "AC": 11,
    "HP": 1,
    "speed": 10,
    "str": 2,
    "dex": 11,
    "con": 8,
    "senses":{
        "blindsight": 10,
        "passive": 9}, 
    "CR": "0", 
    "actions": {
        "sting": {"attack": "Melee", "toHit": 2, "reach": 5, "damage": "1", "type": "piercing", "special": "On hit the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one"}}},
    
    {"name":"Sea Horse",
    "size": "tiny",
    "AC": 11,
    "HP": 1,
    "speed": 0,
    "swim": 20,
    "str": 1,
    "dex": 12,
    "con": 8,
    "senses":{
        "passive": 10}, 
    "CR": "0", 
    "features": {
        "Water Breathing": "The sea horse can breathe only underwater."}},
    
    {"name":"Spider",
    "size": "tiny",
    "AC": 12,
    "HP": 1,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 14,
    "con": 8,
    "skills": {
        "stealth": 4},
    "senses":{
        "darkvision": 30,
        "passive": 10}, 
    "CR": "0", 
    "features": {
        "Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
        "Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
        "Web Walker": "The spider ignores movement restrictions caused by webbing."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1", "type": "piercing", "special": "Plus 7 (3d4) poison damage."}}},
    
    {"name":"Vulture",
    "size": "medium",
    "AC": 10,
    "HP": 5,
    "speed": 10,
    "fly": 50,
    "str": 7,
    "dex": 10,
    "con": 13,
    "skills": {
        "perception": 3},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Keen Sight and Smell": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
        "Pack Tactics": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions":{
        "beak": {"attack": "Melee", "toHit": 2, "reach": 5, "damage": "1d4", "type": "piercing"}}},
    
    {"name":"Weasel",
    "size": "tiny",
    "AC": 13,
    "HP": 1,
    "speed": 30,
    "str": 3,
    "dex": 16,
    "con": 8,
    "skills": {
        "perception": 3,
        "stealth": 5},
    "senses":{
        "passive": 13}, 
    "CR": "0", 
    "features": {
        "Keen Hearing and Smell": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1", "type": "piercing"}}},
    
    {"name":"Blood Hawk",
    "size": "small",
    "AC": 12,
    "HP": 7,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 14,
    "con": 10,
    "skills": {
        "perception": 4},
    "senses":{
        "passive": 14}, 
    "CR": ".125", 
    "features": {
        "Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
        "Pack Tactics": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions":{
        "beak": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1d4+2", "type": "piercing"}}},
    
    {"name":"Camel",
    "size": "large",
    "AC": 9,
    "HP": 15,
    "speed": 50,
    "str": 16,
    "dex": 8,
    "con": 14,
    "senses":{
        "passive": 9}, 
    "CR": ".125", 
    "actions":{
        "bite": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1d4", "type": "bludgeoning"}}},
    
    {"name":"Flying Snake",
    "size": "tiny",
    "AC": 14,
    "HP": 5,
    "speed": 30,
    "fly": 60,
    "swim": 30,
    "str": 4,
    "dex": 18,
    "con": 11,
    "senses":{
        "blindsight": 10,
        "passive": 11}, 
    "CR": ".125",
    "features": {
        "Flyby": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 6, "reach": 5, "damage": "1", "type": "bludgeoning"}}},
    
    {"name":"Giant Crab",
    "size": "medium",
    "AC": 15,
    "HP": 13,
    "speed": 30,
    "swim": 30,
    "str": 13,
    "dex": 15,
    "con": 11,
    "skills":{
        "stealth":4},
    "senses":{
        "blindsight": 30,
        "passive": 9}, 
    "CR": ".125",
    "features": {
        "Amphibious": "The crab can breathe air and water."},
    "actions":{
        "claw": {"attack": "Melee", "toHit": 3, "reach": 5, "damage": "1d6+1", "type": "bludgeoning", "special": "On hit the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target."}}},
    
    {"name":"Giant Rat",
    "size": "small",
    "AC": 12,
    "HP": 7,
    "speed": 30,
    "str": 7,
    "dex": 15,
    "con": 11,
    "senses":{
        "darkvision": 60,
        "passive": 10}, 
    "CR": ".125",
    "features": {
        "Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
        "Pack Tactics": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 4, "reach": 5, "damage": "1d4+2", "type": "piercing"}}},
     
    {"name":"Giant Weasel",
    "size": "medium",
    "AC": 13,
    "HP": 9,
    "speed": 40,
    "str": 11,
    "dex": 16,
    "con": 10,
    "skills": {
        "perception": 3,
        "stealth": 5},
    "senses":{
        "darkvision": 60,
        "passive": 13}, 
    "CR": ".125",
    "features": {
        "Keen Hearing and Smell": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 5, "reach": 5, "damage": "1d4+3", "type": "piercing"}}},
     
    {"name":"Mastiff",
    "size": "medium",
    "AC": 12,
    "HP": 5,
    "speed": 40,
    "str": 13,
    "dex": 14,
    "con": 12,
    "skills": {
        "perception": 3},
    "senses":{
        "passive": 13}, 
    "CR": ".125",
    "features": {
        "Keen Hearing and Smell": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
    "actions":{
        "bite": {"attack": "Melee", "toHit": 3, "reach": 5, "damage": "1d6+1", "type": "piercing", "special": "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."}}},
     
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