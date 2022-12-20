const beasts = `[
    {
        "Name": "Baboon",
        "Size": "Small",
        "AC": 12,
        "HP": 3,
        "Speed": 30,
        "Climb": 30,
        "STR": 8,
        "DEX": 14,
        "CON": 11,
        "Senses": {
            "Passive": 11
        },
        "CR": "0",
        "Features": {
            "Pack Tactics": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 1, "Reach": 5, "Damage": "1d4-1", "Type": "piercing" }
        }
    },

    {
        "Name": "Badger",
        "Size": "Tiny",
        "AC": 10,
        "HP": 3,
        "Speed": 20,
        "Burrow": 5,
        "STR": 4,
        "DEX": 11,
        "CON": 12,
        "Senses": {
            "Darkvision": 30,
            "Passive": 11
        },
        "CR": "0",
        "Features": {
            "Keen Smell": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Bat",
        "Size": "Tiny",
        "AC": 12,
        "HP": 1,
        "Speed": 5,
        "Fly": 30,
        "STR": 2,
        "DEX": 15,
        "CON": 8,
        "Senses": {
            "Blindsight": 60,
            "Passive": 11
        },
        "CR": "0",
        "Features": {
            "Echolocation.": "The bat can't use its blindsight while deafened.",
            "Keen Hearing": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Cat",
        "Size": "Tiny",
        "AC": 12,
        "HP": 2,
        "Speed": 40,
        "Climb": 30,
        "STR": 3,
        "DEX": 15,
        "CON": 10,
        "Skills": {
            "Perception": 3,
            "Stealth": 4
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Keen Smell": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Claws": { "Attack": "Melee", "ToHit": 0, "Reach": 5, "Damage": "1", "Type": "slashing" }
        }
    },

    {
        "Name": "Crab",
        "Size": "Tiny",
        "AC": 11,
        "HP": 2,
        "Speed": 20,
        "Swim": 20,
        "STR": 2,
        "DEX": 11,
        "CON": 10,
        "Skills": {
            "Stealth": 2
        },
        "Senses": {
            "Blindsight": 30,
            "Passive": 9
        },
        "CR": "0",
        "Features": {
            "Amphibious": "The crab can breathe air and water."
        },
        "Actions": {
            "Claw": { "Attack": "Melee", "ToHit": 0, "Reach": 5, "Damage": "1", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Deer",
        "Size": "Medium",
        "AC": 13,
        "HP": 4,
        "Speed": 50,
        "STR": 11,
        "DEX": 16,
        "CON": 11,
        "Senses": {
            "Passive": 12
        },
        "CR": "0",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
        }
    },

    {
        "Name": "Eagle",
        "Size": "Small",
        "AC": 12,
        "HP": 3,
        "Speed": 10,
        "Fly": 60,
        "STR": 6,
        "DEX": 15,
        "CON": 10,
        "Skills": {
            "Perception": 2
        },
        "Senses": {
            "Passive": 14
        },
        "CR": "0",
        "Features": {
            "Keen Sight": " The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        },
        "Actions": {
            "Talons": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "slashing" }
        }
    },

    {
        "Name": "Fox",
        "Size": "Tiny",
        "AC": 13,
        "HP": 2,
        "Speed": 30,
        "Burrow": 5,
        "STR": 2,
        "DEX": 16,
        "CON": 11,
        "Skills": {
            "Perception": 3,
            "Stealth": 5
        },
        "Senses": {
            "Darkvision": 60,
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Keen hearing": "The fox has advantage on Wisdom (Perception) checks that rely on hearing",
        }
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
        }
    },

    {
        "Name": "Frog",
        "Size": "Tiny",
        "AC": 11,
        "HP": 1,
        "Speed": 20,
        "Swim": 20,
        "STR": 1,
        "DEX": 13,
        "CON": 8,
        "Skills": {
            "Perception": 1,
            "Stealth": 3
        },
        "Senses": {
            "Darkvision": 30,
            "Passive": 11
        },
        "CR": "0",
        "Features": {
            "Amphibious": "The frog can breathe air and water.",
            "Standing Leap": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."
        }
    },

    {
        "Name": "Giant Fire Beetle",
        "Size": "Small",
        "AC": 13,
        "HP": 4,
        "Speed": 30,
        "STR": 8,
        "DEX": 10,
        "CON": 12,
        "Senses": {
            "Blindsight": 30,
            "Passive": 8
        },
        "CR": "0",
        "Features": {
            "Illumination": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 1, "Reach": 5, "Damage": "1d6-1", "Type": "slashing" }
        }
    },

    {
        "Name": "Goat",
        "Size": "Medium",
        "AC": 10,
        "HP": 4,
        "Speed": 40,
        "STR": 12,
        "DEX": 10,
        "CON": 11,
        "Senses": {
            "Passive": 10
        },
        "CR": "0",
        "Features": {
            "Charge": "If the goat moves at least 20 feet straight toward a target and then hits it with a Ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
            "Sure-Footed": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d4+1", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Hawk",
        "Size": "Tiny",
        "AC": 13,
        "HP": 1,
        "Speed": 10,
        "Fly": 60,
        "STR": 5,
        "DEX": 16,
        "CON": 8,
        "Skills": {
            "Perception": 4
        },
        "Senses": {
            "Passive": 14
        },
        "CR": "0",
        "Features": {
            "Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
        },
        "Actions": {
            "Talons": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1", "Type": "slashing" }
        }
    },

    {
        "Name": "Hyena",
        "Size": "Medium",
        "AC": 11,
        "HP": 5,
        "Speed": 50,
        "STR": 11,
        "DEX": 13,
        "CON": 12,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Pack Tactics": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1d6", "Type": "piercing" }
        }
    },

    {
        "Name": "Jackal",
        "Size": "Small",
        "AC": 12,
        "HP": 3,
        "Speed": 40,
        "STR": 8,
        "DEX": 15,
        "CON": 11,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Keen Hearing and Smell": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
            "Pack Tactics": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 1, "Reach": 5, "Damage": "1d4-1", "Type": "piercing" }
        }
    },

    {
        "Name": "Lizard",
        "Size": "Tiny",
        "AC": 10,
        "HP": 2,
        "Speed": 20,
        "Climb": 20,
        "STR": 2,
        "DEX": 11,
        "CON": 10,
        "Senses": {
            "Darkvision": 30,
            "Passive": 9
        },
        "CR": "0",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Octopus",
        "Size": "Small",
        "AC": 12,
        "HP": 3,
        "Speed": 5,
        "Swim": 30,
        "STR": 4,
        "DEX": 15,
        "CON": 11,
        "Skills": {
            "Perception": 3,
            "Stealth": 4
        },
        "Senses": {
            "Darkvision": 30,
            "Passive": 12
        },
        "CR": "0",
        "Features": {
            "Hold Breath": "While out of water, the octopus can hold its breath for 30 minutes.",
            "Underwater Camouflage": "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
            "Water Breathing": "The octopus can breathe only underwater."
        },
        "Actions": {
            "Tentacles": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1", "Type": "bludgeoning", "Special": "On hit the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target." },
            "Ink Cloud": { "recharge": "Short or Long rest", "effect": " A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        }
    },

    {
        "Name": "Owl",
        "Size": "Tiny",
        "AC": 11,
        "HP": 1,
        "Speed": 5,
        "Fly": 60,
        "STR": 3,
        "DEX": 13,
        "CON": 8,
        "Skills": {
            "Perception": 4,
            "Stealth": 3
        },
        "Senses": {
            "Darkvision": 120,
            "Passive": 14
        },
        "CR": "0",
        "Features": {
            "Flyby": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
            "Keen Hearing and Sight": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        "Actions": {
            "Talons": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1", "Type": "slashing" }
        }
    },

    {
        "Name": "Quiper",
        "Size": "Tiny",
        "AC": 13,
        "HP": 1,
        "Speed": 0,
        "Swim": 40,
        "STR": 2,
        "DEX": 16,
        "CON": 9,
        "Senses": {
            "Darkvision": 60,
            "Passive": 8
        },
        "CR": "0",
        "Features": {
            "Blood Frenzy": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
            "Water Breathing": "The quipper can breathe only underwater."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Rat",
        "Size": "Tiny",
        "AC": 10,
        "HP": 1,
        "Speed": 20,
        "STR": 2,
        "DEX": 11,
        "CON": 9,
        "Senses": {
            "Darkvision": 30,
            "Passive": 10
        },
        "CR": "0",
        "Features": {
            "Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Raven",
        "Size": "Tiny",
        "AC": 12,
        "HP": 1,
        "Speed": 10,
        "Fly": 50,
        "STR": 2,
        "DEX": 14,
        "CON": 8,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Mimicry": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
        },
        "Actions": {
            "Beak": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Scorpion",
        "Size": "Tiny",
        "AC": 11,
        "HP": 1,
        "Speed": 10,
        "STR": 2,
        "DEX": 11,
        "CON": 8,
        "Senses": {
            "Blindsight": 10,
            "Passive": 9
        },
        "CR": "0",
        "Actions": {
            "Sting": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "On hit the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one" }
        }
    },

    {
        "Name": "Sea Horse",
        "Size": "Tiny",
        "AC": 11,
        "HP": 1,
        "Speed": 0,
        "Swim": 20,
        "STR": 1,
        "DEX": 12,
        "CON": 8,
        "Senses": {
            "Passive": 10
        },
        "CR": "0",
        "Features": {
            "Water Breathing": "The sea horse can breathe only underwater."
        }
    },

    {
        "Name": "Spider",
        "Size": "Tiny",
        "AC": 12,
        "HP": 1,
        "Speed": 20,
        "Climb": 20,
        "STR": 2,
        "DEX": 14,
        "CON": 8,
        "Skills": {
            "Stealth": 4
        },
        "Senses": {
            "Darkvision": 30,
            "Passive": 10
        },
        "CR": "0",
        "Features": {
            "Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
            "Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
            "Web Walker": "The spider ignores movement restrictions caused by webbing."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "Plus 7 (3d4) poison damage." }
        }
    },

    {
        "Name": "Vulture",
        "Size": "Medium",
        "AC": 10,
        "HP": 5,
        "Speed": 10,
        "Fly": 50,
        "STR": 7,
        "DEX": 10,
        "CON": 13,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Keen Sight and Smell": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
            "Pack Tactics": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Beak": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
        }
    },

    {
        "Name": "Weasel",
        "Size": "Tiny",
        "AC": 13,
        "HP": 1,
        "Speed": 30,
        "STR": 3,
        "DEX": 16,
        "CON": 8,
        "Skills": {
            "Perception": 3,
            "Stealth": 5
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "0",
        "Features": {
            "Keen Hearing and Smell": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1", "Type": "piercing" }
        }
    },

    {
        "Name": "Blood Hawk",
        "Size": "Small",
        "AC": 12,
        "HP": 7,
        "Speed": 10,
        "Fly": 60,
        "STR": 6,
        "DEX": 14,
        "CON": 10,
        "Skills": {
            "Perception": 4
        },
        "Senses": {
            "Passive": 14
        },
        "CR": ".125",
        "Features": {
            "Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
            "Pack Tactics": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Beak": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing" }
        }
    },

    {
        "Name": "Camel",
        "Size": "large",
        "AC": 9,
        "HP": 15,
        "Speed": 50,
        "STR": 16,
        "DEX": 8,
        "CON": 14,
        "Senses": {
            "Passive": 9
        },
        "CR": ".125",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1d4", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Flying Snake",
        "Size": "Tiny",
        "AC": 14,
        "HP": 5,
        "Speed": 30,
        "Fly": 60,
        "Swim": 30,
        "STR": 4,
        "DEX": 18,
        "CON": 11,
        "Senses": {
            "Blindsight": 10,
            "Passive": 11
        },
        "CR": ".125",
        "Features": {
            "Flyby": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 6, "Reach": 5, "Damage": "1", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Giant Crab",
        "Size": "Medium",
        "AC": 15,
        "HP": 13,
        "Speed": 30,
        "Swim": 30,
        "STR": 13,
        "DEX": 15,
        "CON": 11,
        "Skills": {
            "Stealth": 4
        },
        "Senses": {
            "Blindsight": 30,
            "Passive": 9
        },
        "CR": ".125",
        "Features": {
            "Amphibious": "The crab can breathe air and water."
        },
        "Actions": {
            "Claw": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "bludgeoning", "Special": "On hit the target is grappled (escape DC 11). The crab has two Claws, each of which can grapple only one target." }
        }
    },

    {
        "Name": "Giant Rat",
        "Size": "Small",
        "AC": 12,
        "HP": 7,
        "Speed": 30,
        "STR": 7,
        "DEX": 15,
        "CON": 11,
        "Senses": {
            "Darkvision": 60,
            "Passive": 10
        },
        "CR": ".125",
        "Features": {
            "Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
            "Pack Tactics": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing" }
        }
    },

    {
        "Name": "Giant Weasel",
        "Size": "Medium",
        "AC": 13,
        "HP": 9,
        "Speed": 40,
        "STR": 11,
        "DEX": 16,
        "CON": 10,
        "Skills": {
            "Perception": 3,
            "Stealth": 5
        },
        "Senses": {
            "Darkvision": 60,
            "Passive": 13
        },
        "CR": ".125",
        "Features": {
            "Keen Hearing and Smell": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1d4+3", "Type": "piercing" }
        }
    },

    {
        "Name": "Mastiff",
        "Size": "Medium",
        "AC": 12,
        "HP": 5,
        "Speed": 40,
        "STR": 13,
        "DEX": 14,
        "CON": 12,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": ".125",
        "Features": {
            "Keen Hearing and Smell": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special": "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        }
    },

    {
        "Name": "Mule",
        "Size": "Medium",
        "AC": 10,
        "HP": 11,
        "Speed": 40,
        "STR": 14,
        "DEX": 10,
        "CON": 13,
        "Senses": {
            "Passive": 10
        },
        "CR": ".125",
        "Features": {
            "Beast of Burden": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
            "Sure-Footed": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone"
        },
        "Actions": {
            "Hooves": { "Attack": "Melee", "ToHit": 2, "Reach": 5, "Damage": "1d4+2", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Poisonous Snake",
        "Size": "Tiny",
        "AC": 13,
        "HP": 2,
        "Speed": 30,
        "Swim": 30,
        "STR": 2,
        "DEX": 16,
        "CON": 11,
        "Senses": {
            "Blindsight": 10,
            "Passive": 10
        },
        "CR": ".125",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "The target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one." }
        }
    },

    {
        "Name": "Pony",
        "Size": "Medium",
        "AC": 10,
        "HP": 11,
        "Speed": 40,
        "STR": 15,
        "DEX": 10,
        "CON": 13,
        "Senses": {
            "Passive": 10
        },
        "CR": ".125",
        "Actions": {
            "Hooves": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Axe Beak",
        "Size": "Large",
        "AC": 11,
        "HP": 19,
        "Speed": 50,
        "STR": 14,
        "DEX": 12,
        "CON": 12,
        "Senses": {
            "Passive": 10
        },
        "CR": ".25",
        "Actions": {
            "Beak": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "slashing" }
        }
    },

    {
        "Name": "Boar",
        "Size": "Medium",
        "AC": 11,
        "HP": 11,
        "Speed": 40,
        "STR": 13,
        "DEX": 11,
        "CON": 12,
        "Senses": {
            "Passive": 9
        },
        "CR": ".25",
        "Features": {
            "Charge": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
            "Relentless (Recharges after a Short or Long Rest)": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        },
        "Actions": {
            "Tusk": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "slashing" }
        }
    },

    {
        "Name": "Constrictor Snake",
        "Size": "Large",
        "AC": 12,
        "HP": 13,
        "Speed": 30,
        "Swim": 30,
        "STR": 15,
        "DEX": 14,
        "CON": 12,
        "Senses": {
            "Blindsight": 10,
            "Passive": 10
        },
        "CR": ".25",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" },
            "Constrict": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "bludgeoning", "Special": "The target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        }
    },

    {
        "Name": "Draft Horse",
        "Size": "Large",
        "AC": 10,
        "HP": 19,
        "Speed": 40,
        "STR": 18,
        "DEX": 10,
        "CON": 12,
        "Senses": {
            "Passive": 10
        },
        "CR": ".25",
        "Actions": {
            "Hooves": { "Attack": "Melee", "ToHit": 6, "Reach": 5, "Damage": "2d4+2", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Elk",
        "Size": "Large",
        "AC": 10,
        "HP": 13,
        "Speed": 50,
        "STR": 16,
        "DEX": 10,
        "CON": 12,
        "Senses": {
            "Passive": 10
        },
        "CR": ".25",
        "Features": {
            "Charge": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1d6+3", "Type": "bludgeoning" },
            "Hooves": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "2d4+3", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Giant Badge",
        "Size": "Medium",
        "AC": 10,
        "HP": 13,
        "Speed": 30,
        "Burrow": 10,
        "STR": 13,
        "DEX": 10,
        "CON": 15,
        "Senses": {
            "Darkvision": 30,
            "Passive": 11
        },
        "CR": ".25",
        "Features": {
            "Keen Smell": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Multiattack": "The badger makes two attacks: one with its bite and one with its claws.",
            "Bite": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing" },
            "Claws": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "2d4+1", "Type": "slashing" }
        }
    },

    {
        "Name": "Giant Bat",
        "Size": "Large",
        "AC": 13,
        "HP": 22,
        "Speed": 10,
        "Fly": 60,
        "STR": 15,
        "DEX": 16,
        "CON": 11,
        "Senses": {
            "Blindsight": 60,
            "Passive": 11
        },
        "CR": ".25",
        "Features": {
            "Echolocation": "The bat can't use its blindsight while deafened.",
            "Keen Hearing": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" }
        }
    },

    {
        "Name": "Giant Centipede",
        "Size": "Small",
        "AC": 13,
        "HP": 4,
        "Speed": 30,
        "Climb": 30,
        "STR": 5,
        "DEX": 14,
        "CON": 12,
        "Senses": {
            "Blindsight": 30,
            "Passive": 8
        },
        "CR": ".25",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing", "Special":"Target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        }
    },

    {
        "Name": "Giant Frog",
        "Size": "Medium",
        "AC": 11,
        "HP": 18,
        "Speed": 30,
        "Swim": 30,
        "STR": 12,
        "DEX": 13,
        "CON": 11,
        "Skills": {
            "Perception": 2,
            "Stealth": 3
        },
        "Senses": {
            "Darkvision": 30,
            "Passive": 12
        },
        "CR": ".25",
        "Features": {
            "Amphibious": "The frog can breathe air and water.",
            "Standing Leap": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special":"Target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            "Swallow": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
        }
    },

    {
        "Name": "Giant Lizard",
        "Size": "Large",
        "AC": 12,
        "HP": 19,
        "Speed": 30,
        "Climb": 30,
        "STR": 15,
        "DEX": 12,
        "CON": 13,
        "Senses": {
            "Darkvision": 30,
            "Passive": 10
        },
        "CR": ".25",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "piercing"}
        }
    },

    {
        "Name": "Giant Owl",
        "Size": "Large",
        "AC": 12,
        "HP": 19,
        "Speed": 5,
        "Fly": 60,
        "STR": 13,
        "DEX": 15,
        "CON": 12,
        "Skills": {
            "Perception": 5,
            "Stealth": 4
        },
        "Senses": {
            "Darkvision": 120,
            "Passive": 15
        },
        "CR": ".25",
        "Features": {
            "Flyby": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
            "Keen Hearing and Sight": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        "Actions": {
            "Talons": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "2d6+1", "Type": "slashing"}
        }
    },

    {
        "Name": "Giant Poisonous Snake",
        "Size": "Medium",
        "AC": 14,
        "HP": 11,
        "Speed": 30,
        "Swim": 30,
        "STR": 10,
        "DEX": 18,
        "CON": 13,
        "Skills": {
            "Perception": 2
        },
        "Senses": {
            "Blindsight": 10,
            "Passive": 12
        },
        "CR": ".25",
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 6, "Reach": 10, "Damage": "1d4+4", "Type": "piercing", "Special": "Target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."}
        }
    },

    {
        "Name": "Giant Wolf Spider",
        "Size": "Medium",
        "AC": 13,
        "HP": 11,
        "Speed": 40,
        "Climb": 40,
        "STR": 12,
        "DEX": 16,
        "CON": 13,
        "Skills": {
            "Perception": 3,
            "Stealth": 7
        },
        "Senses": {
            "Blindsight": 10,
            "Darkvision": 60,
            "Passive": 13
        },
        "CR": ".25",
        "Features": {
            "Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
            "Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
            "Web Walker": "The spider ignores movement restrictions caused by webbing."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special": "Target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."}
        }
    },

    {
        "Name": "Ox",
        "Size": "Large",
        "AC": 10,
        "HP": 15,
        "Speed": 30,
        "STR": 18,
        "DEX": 10,
        "CON": 14,
        "Senses": {
            "Passive": 10
        },
        "CR": ".25",
        "Features": {
            "Beast of Burden": "The oxen is considered to be a Huge animal for the purpose of determining its carrying capacity.",
            "Charge": "If the ox moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "ToHit": 6, "Reach": 5, "Damage": "1d6+4", "Type": "piercing"}
        }
    },

    {
        "Name": "Panther",
        "Size": "Medium",
        "AC": 12,
        "HP": 13,
        "Speed": 50,
        "Climb": 40,
        "STR": 14,
        "DEX": 15,
        "CON": 10,
        "Skills": {
            "Perception": 4,
            "Stealth": 6
        },
        "Senses": {
            "Passive": 14
        },
        "CR": ".25",
        "Features": {
            "Keen Smell": "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
            "Pounce": "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing"},
            "Claw": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "slashing"}
        }
    },

    {
        "Name": "Black Bear",
        "Size": "Medium",
        "AC": 11,
        "HP": 19,
        "Speed": 40,
        "Climb": 30,
        "STR": 15,
        "DEX": 10,
        "CON": 14,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": ".5",
        "Features": {
            "Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Multiattack": "The bear makes two attacks: one with its Bite and one with its Claws.",
            "Bite": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" },
            "Claws": { "Attack": "Melee", "ToHit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "slashing" }
        }
    },

    {
        "Name": "Tiger",
        "Size": "large",
        "AC": 12,
        "HP": 37,
        "Speed": 40,
        "STR": 17,
        "DEX": 15,
        "CON": 14,
        "Skills": {
            "Perception": 3,
            "Stealth": 6
        },
        "Senses": {
            "Darkvision": 60,
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Smell": "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
            "Pounce": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a Claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one Bite attack against it as a bonus action."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1d10+3", "Type": "piercing" },
            "Claw": { "Attack": "Melee", "ToHit": 5, "Reach": 5, "Damage": "1d8+3", "Type": "slashing" }
        }
    }
]`;