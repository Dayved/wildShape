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
            "Bite": { "Attack": "Melee", "To Hit": 1, "Reach": 5, "Damage": "1d4-1", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Claws": { "Attack": "Melee", "To Hit": 0, "Reach": 5, "Damage": "1", "Type": "slashing" }
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
            "Claw": { "Attack": "Melee", "To Hit": 0, "Reach": 5, "Damage": "1", "Type": "bludgeoning" }
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
            "Bite": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
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
            "Talons": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "slashing" }
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
            "Keen hearing": "The fox has advantage on Wisdom (Perception) checks that rely on hearing"
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 1, "Reach": 5, "Damage": "1d6-1", "Type": "slashing" }
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
            "Ram": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d4+1", "Type": "bludgeoning" }
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
            "Talons": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1", "Type": "slashing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1d6", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 1, "Reach": 5, "Damage": "1d4-1", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Tentacles": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1", "Type": "bludgeoning", "Special": "On hit the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target." },
            "Ink Cloud": { "Recharge": "Short or Long rest", "Effect": " A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
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
            "Talons": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1", "Type": "slashing" }
        }
    },

    {
        "Name": "Quipper",
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 0, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Beak": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Sting": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "On hit the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one" }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "Plus 7 (3d4) poison damage." }
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
            "Beak": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1d4", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1", "Type": "piercing" }
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
            "Beak": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d4", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Dolphin",
        "Size": "Medium",
        "AC": 12,
        "HP": 11,
        "Speed": 0,
        "Swim": 60,
        "STR": 14,
        "DEX": 13,
        "CON": 13,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Blindsight": 60,
            "Passive": 13
        },
        "CR": ".125",
        "Features": {
            "Charge": "If the dolphin moves at least 30 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage.",
            "Hold Breath": "The dolphin can hold its breath for 20 minutes."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "bludgeoning" }
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
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1", "Type": "bludgeoning" }
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
            "Claw": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "bludgeoning", "Special": "On hit the target is grappled (escape DC 11). The crab has two Claws, each of which can grapple only one target." }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d4+3", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special": "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
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
            "Hooves": { "Attack": "Melee", "To Hit": 2, "Reach": 5, "Damage": "1d4+2", "Type": "bludgeoning" }
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1", "Type": "piercing", "Special": "The target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one." }
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
            "Hooves": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "bludgeoning" }
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
            "Beak": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "slashing" }
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
            "Relentless": {"Recharge": "Short or Long Rest", "Effect": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."}
        },
        "Actions": {
            "Tusk": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "slashing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" },
            "Constrict": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "bludgeoning", "Special": "The target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
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
            "Hooves": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d4+2", "Type": "bludgeoning" }
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
            "Ram": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d6+3", "Type": "bludgeoning" },
            "Hooves": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d4+3", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Giant Badger",
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
            "Bite": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing" },
            "Claws": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "2d4+1", "Type": "slashing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "piercing", "Special":"Target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
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
            "Bite": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special":"Target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "piercing"}
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
            "Talons": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "2d6+1", "Type": "slashing"}
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
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 10, "Damage": "1d4+4", "Type": "piercing", "Special": "Target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."}
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
            "Bite": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "piercing", "Special": "Target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."}
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
            "Charge": "If the ox moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1d6+4", "Type": "piercing"}
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing"},
            "Claw": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d4+2", "Type": "slashing"}
        }
    },

    {
        "Name": "Riding Horse",
        "Size": "Large",
        "AC": 10,
        "HP": 13,
        "Speed": 60,
        "STR": 16,
        "DEX": 10,
        "CON": 12,
        "Senses": {
            "Passive": 10
        },
        "CR": ".25",
        "Actions": {
            "Hooves": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d4+3", "Type": "bludgeoning" }
        }
    },

    {
        "Name": "Rothe",
        "Size": "Large",
        "AC": 10,
        "HP": 15,
        "Speed": 30,
        "STR": 18,
        "DEX": 10,
        "CON": 14,
        "Senses": {
            "Darkvision": 30,
            "Passive": 10
        },
        "CR": ".25",
        "Features": {
            "Charge": "If the rothé moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1d6+4", "Type": "piercing" }
        }
    },

    {
        "Name": "Stench Kow",
        "Size": "Large",
        "AC": 10,
        "HP": 15,
        "Speed": 30,
        "STR": 18,
        "DEX": 10,
        "CON": 14,
        "Senses": {
            "Darkvision": 60,
            "Passive": 10
        },
        "Damage Resistances": "Cold, Fire, Poison",
        "CR": ".25",
        "Features": {
            "Charge": "If the stench kow moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage.",
            "Stench": "Any creature other than a stench kow that starts its turn within 5 feet of the stench kow must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1d6+4", "Type": "piercing" }
        }
    },

    {
        "Name": "Wolf",
        "Size": "Medium",
        "AC": 13,
        "HP": 11,
        "Speed": 40,
        "STR": 12,
        "DEX": 15,
        "CON": 12,
        "Skills": {
            "Perception": 3,
            "Stealth": 4
        },
        "Senses": {
            "Passive": 13
        },
        "CR": ".25",
        "Features": {
            "Keen Hearing and Smell": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
            "Pack Tactics": "The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "piercing", "Special": "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."}
        }
    },

    {
        "Name": "Ape",
        "Size": "Medium",
        "AC": 12,
        "HP": 19,
        "Speed": 30,
        "Climb": 30,
        "STR": 16,
        "DEX": 14,
        "CON": 14,
        "Skills": {
            "Athletics": 5,
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": ".5",
        "Actions": {
            "Multiattack": "The ape makes two fist attacks.",
            "Fist": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d6+3", "Type": "bludgeoning" },
            "Rock": { "Attack": "Ranged", "To Hit": 5, "Range": "25/50", "Damage": "1d6+3", "Type": "bludgeoning" }
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
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing" },
            "Claws": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "slashing" }
        }
    },

    {
        "Name": "Crocodile",
        "Size": "Large",
        "AC": 12,
        "HP": 19,
        "Speed": 20,
        "Swim": 30,
        "STR": 15,
        "DEX": 10,
        "CON": 13,
        "Skills": {
            "Stealth": 2
        },
        "Senses": {
            "Passive": 10
        },
        "CR": ".5",
        "Features": {
            "Hold Breath": "The crocodile can hold its breath for 15 minutes."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d10+2", "Type": "piercing", "Special": "The target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." }
        }
    },

    {
        "Name": "Giant Goat",
        "Size": "Large",
        "AC": 11,
        "HP": 19,
        "Speed": 40,
        "STR": 17,
        "DEX": 11,
        "CON": 12,
        "Senses": {
            "Passive": 11
        },
        "CR": ".5",
        "Features": {
            "Charge": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
            "Sure-Footed": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d4+3", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Giant Sea Horse",
        "Size": "Large",
        "AC": 13,
        "HP": 16,
        "Speed": 0,
        "Swim": 40,
        "STR": 12,
        "DEX": 15,
        "CON": 11,
        "Senses": {
            "Passive": 11
        },
        "CR": ".5",
        "Features": {
            "Charge": "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
            "Water Breathing": "The sea horse can breathe only underwater."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Giant Wasp",
        "Size": "Medium",
        "AC": 12,
        "HP": 13,
        "Speed": 10,
        "Fly": 50,
        "STR": 10,
        "DEX": 14,
        "CON": 10,
        "Senses": {
            "Passive": 10
        },
        "CR": ".5",
        "Actions": {
            "Sting": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d6+2", "Type": "piercing", "Special": "The target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."}
        }
    },

    {
        "Name": "Reef Manta Ray",
        "Size": "Large",
        "AC": 12,
        "HP": 16,
        "Speed": 0,
        "Swim": 40,
        "STR": 13,
        "DEX": 12,
        "CON": 12,
        "Senses": {
            "Darkvision": 60,
            "Passive": 11
        },
        "CR": ".5",
        "Features": {
            "Charge": "If the manta ray moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
            "Water Breathing": "The manta ray can breathe only underwater."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "To Hit": 3, "Reach": 5, "Damage": "1d6+1", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Reef Shark",
        "Size": "Medium",
        "AC": 12,
        "HP": 22,
        "Speed": 0,
        "Swim": 40,
        "STR": 13,
        "DEX": 12,
        "CON": 12,
        "Skills": {
            "Perception": 2
        },
        "Senses": {
            "Blindsight": 30,
            "Passive": 12
        },
        "CR": ".5",
        "Features": {
            "Pack Tactics": "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated.",
            "Water Breathing": "The shark can breathe only underwater."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "piercing"}
        }
    },

    {
        "Name": "Warhorse",
        "Size": "Large",
        "AC": 11,
        "HP": 19,
        "Speed": 60,
        "STR": 18,
        "DEX": 12,
        "CON": 13,
        "Senses": {
            "Passive": 11
        },
        "CR": ".5",
        "Features": {
            "Trampling Charge": "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
        },
        "Actions": {
            "Hooves": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d6+4", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Brown Bear",
        "Size": "Large",
        "AC": 11,
        "HP": 34,
        "Speed": 40,
        "Climb": 30,
        "STR": 19,
        "DEX": 10,
        "CON": 16,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1d8+4", "Type": "piercing"},
            "Claws": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d6+4", "Type": "slashing"}
        }
    },

    {
        "Name": "Dire Wolf",
        "Size": "Large",
        "AC": 14,
        "HP": 37,
        "Speed": 50,
        "STR": 17,
        "DEX": 15,
        "CON": 15,
        "Skills": {
            "Perception": 3,
            "Stealth": 4
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Hearing and Smell": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
            "Pack Tactics": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d6+3", "Type": "piercing", "Special": "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."}
        }
    },

    {
        "Name": "Giant Eagle",
        "Size": "Large",
        "AC": 13,
        "HP": 26,
        "Speed": 10,
        "Fly": 80,
        "STR": 16,
        "DEX": 17,
        "CON": 13,
        "Skills": {
            "Perception": 4
        },
        "Senses": {
            "Passive": 14
        },
        "CR": "1",
        "Features": {
            "Keen Sight": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."        },
        "Actions": {
            "Multiattack": "The eagle makes two attacks: one with its beak and one with its talons.",
            "Beak": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d6+3", "Type": "piercing"},
            "Talons": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d6+3", "Type": "slashing"}
        }
    },

    {
        "Name": "Giant Hyena",
        "Size": "Large",
        "AC": 12,
        "HP": 45,
        "Speed": 50,
        "STR": 16,
        "DEX": 14,
        "CON": 14,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Rampage": "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d6+3", "Type": "piercing"}
        }
    },

    {
        "Name": "Giant Octopus",
        "Size": "Large",
        "AC": 11,
        "HP": 52,
        "Speed": 10,
        "Swim": 60,
        "STR": 17,
        "DEX": 13,
        "CON": 13,
        "Skills": {
            "Perception": 4,
            "Stealth": 5
        },
        "Senses": {
            "Darkvision": 60,
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Hold Breath": "While out of water, the octopus can hold its breath for 1 hour.",
            "Underwater Camouflage": "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
            "Water Breathing": "The octopus can breathe only underwater."},
        "Actions": {
            "Tentacles": { "Attack": "Melee", "To Hit": 5, "Reach": 15, "Damage": "2d6+3", "Type": "bludgeoning", "Special": "If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."},
            "Ink Cloud": {"Recharge": "Short or Long Rest", "Effect": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."}
        }
    },

    {
        "Name": "Giant Spider",
        "Size": "Large",
        "AC": 14,
        "HP": 26,
        "Speed": 30,
        "Climb": 30,
        "STR": 14,
        "DEX": 16,
        "CON": 12,
        "Skills": {
            "Stealth": 7
        },
        "Senses": {
            "Blindsight": 10,
            "Darkvision": 60,
            "Passive": 10
        },
        "CR": "1",
        "Features": {
            "Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
            "Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
            "Web Walker": "The spider ignores movement restrictions caused by webbing."},
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d8+3", "Type": "piercing", "Special": "The target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."},
            "Web": {"Recharge": "Short or Long Rest", "Attack": "Ranged", "To Hit": 5, "Range": "30/60", "Special": "The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."}
        }
    },

    {
        "Name": "Giant Toad",
        "Size": "Large",
        "AC": 11,
        "HP": 39,
        "Speed": 20,
        "Swim": 40,
        "STR": 15,
        "DEX": 13,
        "CON": 13,
        "Senses": {
            "Darkvision": 30,
            "Passive": 10
        },
        "CR": "1",
        "Features": {
            "Amphibious": "The toad can breathe air and water.",
            "Standing Leap": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."},
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d10+2", "Type": "piercing", "Special": "Plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."},
            "Swallow": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
        }
    },

    {
        "Name": "Giant Vulture",
        "Size": "Large",
        "AC": 10,
        "HP": 22,
        "Speed": 10,
        "Fly": 60,
        "STR": 15,
        "DEX": 10,
        "CON": 15,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Sight and Smell": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
            "Pack Tactics": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."},
        "Actions": {
            "Multiattack": "The vulture makes two attacks: one with its beak and one with its talons.",
            "Beak": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "2d4+2", "Type": "piercing"},
            "Talons": { "Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "2d6+2", "Type": "slashing"}
        }
    },

    {
        "Name": "Lion",
        "Size": "Large",
        "AC": 12,
        "HP": 26,
        "Speed": 50,
        "STR": 17,
        "DEX": 15,
        "CON": 13,
        "Skills": {
            "Perception": 3,
            "Stealth": 6
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Smell": "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
            "Pack Tactics": "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated.",
            "Pounce": "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.",
            "Running Leap": "With a 10-foot running start, the lion can long jump up to 25 feet."},
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d8+3", "Type": "piercing"},
            "Claw": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d6+3", "Type": "slashing"}
        }
    },

    {
        "Name": "Tiger",
        "Size": "Large",
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
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d10+3", "Type": "piercing" },
            "Claw": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d8+3", "Type": "slashing" }
        }
    },

    {
        "Name": "Wild Dog Alpha",
        "Size": "Large",
        "AC": 12,
        "HP": 26,
        "Speed": 50,
        "STR": 17,
        "DEX": 15,
        "CON": 13,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "1",
        "Features": {
            "Keen Hearing and Smell": "The wild dog alpha has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
            "Pack Tactics": "The wild dog alpha has advantage on an attack roll against a creature if at least one of the wild dog alpha's allies is within 5 feet of the creature and the ally isn't incapacitated.",
            "Pounce": "If the wild dog alpha moves at least 20 feet straight toward a creature and then hits it with a bite attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the wild dog alpha can make one additional bite attack against it as a bonus action.",
            "Running Leap": "With a 10-foot running start, the wild dog alpha can long jump up to 25 feet."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "1d8+3", "Type": "piercing" }
        }
    },

    {
        "Name": "Aurochs",
        "Size": "Large",
        "AC": 11,
        "HP": 38,
        "Speed": 50,
        "STR": 20,
        "DEX": 10,
        "CON": 19,
        "Senses": {
            "Passive": 11
        },
        "CR": "2",
        "Features": {
            "Charge": "If the aurochs moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "To Hit": 7, "Reach": 5, "Damage": "2d8+5", "Type": "piercing" }
        }
    },

    {
        "Name": "Giant Boar",
        "Size": "Large",
        "AC": 12,
        "HP": 42,
        "Speed": 40,
        "STR": 17,
        "DEX": 10,
        "CON": 16,
        "Senses": {
            "Passive": 8
        },
        "CR": "2",
        "Features": {
            "Charge": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
            "Relentles": {"Recharge": "Short or Long Rest", "Effect": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."}
        },
        "Actions": {
            "Tusk": { "Attack": "Melee", "To Hit": 5, "Reach": 5, "Damage": "2d6+3", "Type": "slashing" }
        }
    },

    {
        "Name": "Giant Constrictor Snake",
        "Size": "Huge",
        "AC": 12,
        "HP": 60,
        "Speed": 30,
        "Swim": 30,
        "STR": 19,
        "DEX": 14,
        "CON": 12,
        "Skills": {
            "Perception": 2
        },
        "Senses": {
            "Blindsight": 10,
            "Passive": 12
        },
        "CR": "2",
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 10, "Damage": "2d6+4", "Type": "piercing" },
            "Constrict": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d8+4", "Type": "bludgeoning", "Special": "The target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."}
        }
    },

    {
        "Name": "Giant Elk",
        "Size": "Huge",
        "AC": 14,
        "HP": 42,
        "Speed": 60,
        "STR": 19,
        "DEX": 16,
        "CON": 14,
        "Skills": {
            "Perception": 4
        },
        "Senses": {
            "Passive": 14
        },
        "CR": "2",
        "Features": {
            "Charge": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
        },
        "Actions": {
            "Ram": { "Attack": "Melee", "To Hit": 6, "Reach": 10, "Damage": "2d6+4", "Type": "bludgeoning" },
            "Hooves": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "4d8+4", "Type": "bludgeoning", "Special": "The target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."}
        }
    },

    {
        "Name": "Hunter Shark",
        "Size": "Large",
        "AC": 12,
        "HP": 45,
        "Speed": 0,
        "Swim": 40,
        "STR": 18,
        "DEX": 13,
        "CON": 15,
        "Skills": {
            "Perception": 2
        },
        "Senses": {
            "Blindsight": 30,
            "Passive": 12
        },
        "CR": "2",
        "Features": {
            "Blood Frenzy": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
            "Water Breathing": "The shark can breathe only underwater."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d8+4", "Type": "piercing"}
        }
    },

    {
        "Name": "Polar Bear",
        "Size": "Large",
        "AC": 12,
        "HP": 42,
        "Speed": 40,
        "Swim": 30,
        "STR": 20,
        "DEX": 10,
        "CON": 16,
        "Skills": {
            "Perception": 3
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "2",
        "Features": {
            "Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "Actions": {
            "Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
            "Bite": { "Attack": "Melee", "To Hit": 7, "Reach": 5, "Damage": "1d8+5", "Type": "piercing"},
            "Claws": { "Attack": "Melee", "To Hit": 7, "Reach": 5, "Damage": "2d6+5", "Type": "slashing"}
        }
    },

    {
        "Name": "Rhinoceros",
        "Size": "Large",
        "AC": 11,
        "HP": 45,
        "Speed": 40,
        "STR": 21,
        "DEX": 8,
        "CON": 15,
        "Senses": {
            "Passive": 11
        },
        "CR": "2",
        "Features": {
            "Charge": "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        },
        "Actions": {
            "Gore": { "Attack": "Melee", "To Hit": 7, "Reach": 5, "Damage": "2d8+5", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Saber-Toothed Tiger",
        "Size": "Large",
        "AC": 12,
        "HP": 52,
        "Speed": 40,
        "STR": 18,
        "DEX": 14,
        "CON": 15,
        "Skills": {
            "Perception": 3,
            "Stealth": 6
        },
        "Senses": {
            "Passive": 13
        },
        "CR": "2",
        "Features": {
            "Keen Smell": "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
            "Pounce": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
        },
        "Actions": {
            "Bite": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "1d10+5", "Type": "piercing"},
            "Claw": { "Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "2d6+5", "Type": "slashing"}
        }
    },

    {
        "Name": "Giant Scorpion",
        "Size": "Large",
        "AC": 15,
        "HP": 52,
        "Speed": 40,
        "STR": 15,
        "DEX": 13,
        "CON": 15,
        "Senses": {
            "Blindsight": 60,
            "Passive": 9
        },
        "CR": "3",
        "Actions": {
            "Multiattack": "The scorpion makes three attacks: two with its claws and one with its sting.",
            "Claw": {"Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d8+2", "Type": "bludgeoning", "Special": "The target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."},
            "Sting": {"Attack": "Melee", "To Hit": 4, "Reach": 5, "Damage": "1d10+2", "Type": "piercing", "Special": "The target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."}
        }
    },

    {
        "Name": "Killer Whale",
        "Size": "Huge",
        "AC": 12,
        "HP": 90,
        "Speed": 0,
        "Swim": 60,
        "STR": 19,
        "DEX": 10,
        "CON": 13,
        "Skills":{
            "Perception": 3
        },
        "Senses": {
            "Blindsight": 120,
            "Passive": 13
        },
        "CR": "3",
        "Feature":{
            "Echolocation": "The whale can't use its blindsight while deafened.",
            "Hold Breath": "The whale can hold its breath for 30 minutes.",
            "Keen Hearing": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        "Actions": {
            "Bite": {"Attack": "Melee", "To Hit": 6, "Reach": 5, "Damage": "5d6+4", "Type": "piercing"}
        }
    },

    {
        "Name": "Elephant",
        "Size": "Huge",
        "AC": 12,
        "HP": 76,
        "Speed": 40,
        "STR": 22,
        "DEX": 9,
        "CON": 17,
        "Senses": {
            "Passive": 10
        },
        "CR": "4",
        "Feature":{
            "Trampling Charge": "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
        },
        "Actions": {
            "Gore": {"Attack": "Melee", "To Hit": 8, "Reach": 5, "Damage": "3d8+6", "Type": "piercing"},
            "Stomp": {"Attack": "Melee", "To Hit": 8, "Reach": 5, "Damage": "3d10+6", "Type": "bludgeoning"}
        }
    },

    {
        "Name": "Giant Crocodile",
        "Size": "Huge",
        "AC": 14,
        "HP": 85,
        "Speed": 30,
        "Swim": 50,
        "STR": 21,
        "DEX": 9,
        "CON": 17,
        "Skills":{
            "Stealth": 5
        },
        "Senses": {
            "Passive": 10
        },
        "CR": "5",
        "Feature":{
            "Hold Breath": "The crocodile can hold its breath for 30 minutes."
        },
        "Actions": {
            "Multiattack": "The crocodile makes two attacks: one with its bite and one with its tail.",
            "Bite": {"Attack": "Melee", "To Hit": 8, "Reach": 5, "Damage": "3d10+5", "Type": "piercing", "Special": "the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."},
            "Tail": {"Attack": "Melee", "To Hit": 8, "Reach": 10, "Damage": "2d8+5", "Type": "bludgeoning", "Special": "If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."}
        }
    },

    {
        "Name": "Giant Shark",
        "Size": "Huge",
        "AC": 13,
        "HP": 126,
        "Speed": 0,
        "Swim": 50,
        "STR": 23,
        "DEX": 11,
        "CON": 21,
        "Skills":{
            "Perception": 3
        },
        "Senses": {
            "Blindsight": 60,
            "Passive": 13
        },
        "CR": "5",
        "Feature":{
            "Blood Frenzy": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
            "Water Breathing": "The shark can breathe only underwater."
        },
        "Actions": {
            "Bite": {"Attack": "Melee", "To Hit": 9, "Reach": 5, "Damage": "3d10+6", "Type": "piercing"}
        }
    },

    {
        "Name": "Mammoth",
        "Size": "Huge",
        "AC": 13,
        "HP": 126,
        "Speed": 40,
        "STR": 24,
        "DEX": 9,
        "CON": 21,
        "Senses": {
            "Passive": 10
        },
        "CR": "6",
        "Feature":{
            "Trampling Charge": "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
        },
        "Actions": {
            "Gore": {"Attack": "Melee", "To Hit": 10, "Reach": 10, "Damage": "4d8+7", "Type": "piercing"},
            "Stomp": {"Attack": "Melee", "To Hit": 10, "Reach": 5, "Damage": "4d10+7", "Type": "bludgeoning"}
        }
    }
]`;