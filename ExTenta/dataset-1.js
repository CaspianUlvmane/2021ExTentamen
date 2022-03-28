// Array över personer, respektive person innehåller:
// - Ett ID
// - Förnamn
// - Efternamn
// - Budget (den totala budget dom har att handla för)
// - Inköpslista (en array över de varor, samt antal, som ska inhandlas)
const PEOPLE = [
    {
      "personId": 1,
      "firstName": "Catharina",
      "lastName": "Hasnip",
      "budget": 48,
      "shoppingList": [
        {
          "groceryId": 46,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 2,
      "firstName": "Dilly",
      "lastName": "Goulborn",
      "budget": 16,
      "shoppingList": [
        {
          "groceryId": 16,
          "quantity": 2
        },
        {
          "groceryId": 21,
          "quantity": 1
        },
        {
          "groceryId": 40,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 3,
      "firstName": "Becca",
      "lastName": "Suffe",
      "budget": 46,
      "shoppingList": [
        {
          "groceryId": 22,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 4,
      "firstName": "Gale",
      "lastName": "Ajam",
      "budget": 21,
      "shoppingList": [
        {
          "groceryId": 37,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 5,
      "firstName": "Torrie",
      "lastName": "Sudddard",
      "budget": 40,
      "shoppingList": [
        {
          "groceryId": 50,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 6,
      "firstName": "Staffard",
      "lastName": "Crohan",
      "budget": 45,
      "shoppingList": [
        {
          "groceryId": 33,
          "quantity": 1
        },
        {
          "groceryId": 12,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 7,
      "firstName": "Vitia",
      "lastName": "Matteotti",
      "budget": 23,
      "shoppingList": [
        {
          "groceryId": 41,
          "quantity": 1
        },
        {
          "groceryId": 47,
          "quantity": 2
        },
        {
          "groceryId": 12,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 8,
      "firstName": "Merola",
      "lastName": "Gibby",
      "budget": 43,
      "shoppingList": [
        {
          "groceryId": 27,
          "quantity": 2
        },
        {
          "groceryId": 18,
          "quantity": 2
        },
        {
          "groceryId": 20,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 9,
      "firstName": "Aleksandr",
      "lastName": "Hentze",
      "budget": 38,
      "shoppingList": [
        {
          "groceryId": 4,
          "quantity": 2
        },
        {
          "groceryId": 46,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 10,
      "firstName": "Roarke",
      "lastName": "Ardling",
      "budget": 14,
      "shoppingList": [
        {
          "groceryId": 34,
          "quantity": 2
        },
        {
          "groceryId": 31,
          "quantity": 1
        },
        {
          "groceryId": 30,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 11,
      "firstName": "Lowell",
      "lastName": "Bartolomeotti",
      "budget": 26,
      "shoppingList": [
        {
          "groceryId": 50,
          "quantity": 1
        },
        {
          "groceryId": 2,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 12,
      "firstName": "Marline",
      "lastName": "Lukesch",
      "budget": 50,
      "shoppingList": [
        {
          "groceryId": 42,
          "quantity": 2
        },
        {
          "groceryId": 46,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 13,
      "firstName": "Aile",
      "lastName": "Gambrell",
      "budget": 20,
      "shoppingList": [
        {
          "groceryId": 26,
          "quantity": 1
        },
        {
          "groceryId": 43,
          "quantity": 2
        },
        {
          "groceryId": 49,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 14,
      "firstName": "Velma",
      "lastName": "Chidwick",
      "budget": 20,
      "shoppingList": [
        {
          "groceryId": 7,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 15,
      "firstName": "Barthel",
      "lastName": "Mattschas",
      "budget": 18,
      "shoppingList": [
        {
          "groceryId": 31,
          "quantity": 2
        },
        {
          "groceryId": 27,
          "quantity": 2
        },
        {
          "groceryId": 19,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 16,
      "firstName": "Sybil",
      "lastName": "Hawkey",
      "budget": 47,
      "shoppingList": [
        {
          "groceryId": 26,
          "quantity": 1
        },
        {
          "groceryId": 23,
          "quantity": 2
        },
        {
          "groceryId": 13,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 17,
      "firstName": "Petronia",
      "lastName": "Gras",
      "budget": 27,
      "shoppingList": [
        {
          "groceryId": 39,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 18,
      "firstName": "Alexio",
      "lastName": "Lawlance",
      "budget": 46,
      "shoppingList": [
        {
          "groceryId": 13,
          "quantity": 1
        },
        {
          "groceryId": 35,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 19,
      "firstName": "Alverta",
      "lastName": "Seagood",
      "budget": 31,
      "shoppingList": [
        {
          "groceryId": 6,
          "quantity": 2
        },
        {
          "groceryId": 48,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 20,
      "firstName": "Zachariah",
      "lastName": "Extal",
      "budget": 23,
      "shoppingList": [
        {
          "groceryId": 7,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 21,
      "firstName": "Heda",
      "lastName": "Proughten",
      "budget": 50,
      "shoppingList": [
        {
          "groceryId": 29,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 22,
      "firstName": "Danyette",
      "lastName": "Kerner",
      "budget": 44,
      "shoppingList": [
        {
          "groceryId": 14,
          "quantity": 2
        },
        {
          "groceryId": 39,
          "quantity": 1
        },
        {
          "groceryId": 21,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 23,
      "firstName": "Catherin",
      "lastName": "Haville",
      "budget": 20,
      "shoppingList": [
        {
          "groceryId": 14,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 24,
      "firstName": "Ashely",
      "lastName": "MacKintosh",
      "budget": 20,
      "shoppingList": [
        {
          "groceryId": 38,
          "quantity": 1
        },
        {
          "groceryId": 27,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 25,
      "firstName": "Hastings",
      "lastName": "Larvin",
      "budget": 12,
      "shoppingList": [
        {
          "groceryId": 9,
          "quantity": 2
        },
        {
          "groceryId": 47,
          "quantity": 1
        },
        {
          "groceryId": 22,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 26,
      "firstName": "Elaine",
      "lastName": "Yeiles",
      "budget": 16,
      "shoppingList": [
        {
          "groceryId": 22,
          "quantity": 1
        },
        {
          "groceryId": 48,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 27,
      "firstName": "Land",
      "lastName": "Farleigh",
      "budget": 20,
      "shoppingList": [
        {
          "groceryId": 16,
          "quantity": 1
        },
        {
          "groceryId": 42,
          "quantity": 1
        }
      ]
    },
    {
      "personId": 28,
      "firstName": "Eileen",
      "lastName": "Serris",
      "budget": 31,
      "shoppingList": [
        {
          "groceryId": 5,
          "quantity": 1
        },
        {
          "groceryId": 29,
          "quantity": 2
        },
        {
          "groceryId": 48,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 29,
      "firstName": "Gordy",
      "lastName": "Bere",
      "budget": 25,
      "shoppingList": [
        {
          "groceryId": 46,
          "quantity": 2
        }
      ]
    },
    {
      "personId": 30,
      "firstName": "Chen",
      "lastName": "Farnie",
      "budget": 24,
      "shoppingList": [
        {
          "groceryId": 33,
          "quantity": 2
        }
      ]
    }
];

// Array över tillgängliga varor, respektive vara innehåller:
// - Ett ID
// - Namn
// - Pris
const GROCERIES = [
    {
      "groceryId": 1,
      "groceryName": "Appetizer - Asian Shrimp Roll",
      "price": 2.51
    },
    {
      "groceryId": 2,
      "groceryName": "Lettuce - Frisee",
      "price": 1.37
    },
    {
      "groceryId": 3,
      "groceryName": "Pork - Loin, Bone - In",
      "price": 2.67
    },
    {
      "groceryId": 4,
      "groceryName": "Oil - Hazelnut",
      "price": 8.49
    },
    {
      "groceryId": 5,
      "groceryName": "Bacardi Breezer - Strawberry",
      "price": 7.74
    },
    {
      "groceryId": 6,
      "groceryName": "Pork - Tenderloin, Fresh",
      "price": 4.39
    },
    {
      "groceryId": 7,
      "groceryName": "Muffin Batt - Ban Dream Zero",
      "price": 0.8
    },
    {
      "groceryId": 8,
      "groceryName": "Pasta - Canelloni, Single Serve",
      "price": 8.35
    },
    {
      "groceryId": 9,
      "groceryName": "Soup - Campbells, Chix Gumbo",
      "price": 7.55
    },
    {
      "groceryId": 10,
      "groceryName": "Tortillas - Flour, 10",
      "price": 2.75
    },
    {
      "groceryId": 11,
      "groceryName": "Flour - Masa De Harina Mexican",
      "price": 5.05
    },
    {
      "groceryId": 12,
      "groceryName": "Sword Pick Asst",
      "price": 8.75
    },
    {
      "groceryId": 13,
      "groceryName": "Kahlua",
      "price": 5.24
    },
    {
      "groceryId": 14,
      "groceryName": "Wine - Lamancha Do Crianza",
      "price": 0.11
    },
    {
      "groceryId": 15,
      "groceryName": "Alize Red Passion",
      "price": 4
    },
    {
      "groceryId": 16,
      "groceryName": "Dooleys Toffee",
      "price": 1.56
    },
    {
      "groceryId": 17,
      "groceryName": "Corn Meal",
      "price": 6.72
    },
    {
      "groceryId": 18,
      "groceryName": "Emulsifier",
      "price": 0.39
    },
    {
      "groceryId": 19,
      "groceryName": "Ice Cream - Fudge Bars",
      "price": 2.46
    },
    {
      "groceryId": 20,
      "groceryName": "Salmon - Smoked, Sliced",
      "price": 7.71
    },
    {
      "groceryId": 21,
      "groceryName": "Pasta - Gnocchi, Potato",
      "price": 8.13
    },
    {
      "groceryId": 22,
      "groceryName": "Veal - Leg, Provimi - 50 Lb Max",
      "price": 1.44
    },
    {
      "groceryId": 23,
      "groceryName": "Cheese - Mascarpone",
      "price": 9.14
    },
    {
      "groceryId": 24,
      "groceryName": "Straw - Regular",
      "price": 7.9
    },
    {
      "groceryId": 25,
      "groceryName": "Chocolate Eclairs",
      "price": 4.93
    },
    {
      "groceryId": 26,
      "groceryName": "Juice - Clamato, 341 Ml",
      "price": 6.53
    },
    {
      "groceryId": 27,
      "groceryName": "Beans - Turtle, Black, Dry",
      "price": 2.78
    },
    {
      "groceryId": 28,
      "groceryName": "Chicken - Thigh, Bone In",
      "price": 3.28
    },
    {
      "groceryId": 29,
      "groceryName": "Lettuce - California Mix",
      "price": 2.26
    },
    {
      "groceryId": 30,
      "groceryName": "Soup - Campbells Bean Medley",
      "price": 9.78
    },
    {
      "groceryId": 31,
      "groceryName": "Bread - Corn Muffaleta Onion",
      "price": 5.13
    },
    {
      "groceryId": 32,
      "groceryName": "Trueblue - Blueberry",
      "price": 9.52
    },
    {
      "groceryId": 33,
      "groceryName": "Ocean Spray - Ruby Red",
      "price": 3.96
    },
    {
      "groceryId": 34,
      "groceryName": "Oregano - Dry, Rubbed",
      "price": 1.21
    },
    {
      "groceryId": 35,
      "groceryName": "Wine - Semi Dry Riesling Vineland",
      "price": 0.73
    },
    {
      "groceryId": 36,
      "groceryName": "Lettuce - Lambs Mash",
      "price": 8.75
    },
    {
      "groceryId": 37,
      "groceryName": "Blackberries",
      "price": 5.89
    },
    {
      "groceryId": 38,
      "groceryName": "Fish - Halibut, Cold Smoked",
      "price": 7.08
    },
    {
      "groceryId": 39,
      "groceryName": "Milk - Homo",
      "price": 5.24
    },
    {
      "groceryId": 40,
      "groceryName": "Oil - Safflower",
      "price": 2.4
    },
    {
      "groceryId": 41,
      "groceryName": "Cheese - Manchego, Spanish",
      "price": 1.2
    },
    {
      "groceryId": 42,
      "groceryName": "Pepper - Jalapeno",
      "price": 0.39
    },
    {
      "groceryId": 43,
      "groceryName": "Steamers White",
      "price": 9.41
    },
    {
      "groceryId": 44,
      "groceryName": "Ham - Black Forest",
      "price": 4.51
    },
    {
      "groceryId": 45,
      "groceryName": "Coffee - Colombian, Portioned",
      "price": 1.71
    },
    {
      "groceryId": 46,
      "groceryName": "Grouper - Fresh",
      "price": 6.42
    },
    {
      "groceryId": 47,
      "groceryName": "Soup - Campbells, Lentil",
      "price": 3.48
    },
    {
      "groceryId": 48,
      "groceryName": "Wine - Magnotta, White",
      "price": 5.09
    },
    {
      "groceryId": 49,
      "groceryName": "Crush - Grape, 355 Ml",
      "price": null
    },
    {
      "groceryId": 50,
      "groceryName": "Chinese Foods - Pepper Beef",
      "price": 5.34
    }
];

// Detta objekt skall era funktioner ta emot (observera nycklarna nedan)
const dataset1 = { 
    PEOPLE: PEOPLE,         // Personer
    GROCERIES: GROCERIES    // Varor
}