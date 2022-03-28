function A1 (dataset1){
   let budgetOrder = dataset1.PEOPLE.sort((a,b) => {
        if (a.budget > b.budget){
            return 1
        } else if (a.budget < b.budget){
            return -1}
            return 0
    })
    let lowBudget = budgetOrder.slice(0, 3)
    
    return lowBudget.map((person) => person.personId)
}
    

function A2 (dataset1){
    let buyThree = dataset1.PEOPLE.filter((a) => a.shoppingList.length == 3)
    let names = buyThree.map((person) => `${person.firstName} ${person.lastName}`)
    return names
}

function A2v2 (dataset1){
    let buyThree = dataset1.PEOPLE.filter((person) => {
        let sum = 0
        for (let i = 0; i < person.shoppingList.length; i++){
            sum += person.shoppingList[i].quantity
        }
         if (sum == 3){
        return person}
        })
    let names = buyThree.map((person) => `${person.firstName} ${person.lastName}`)
    return names
}

function A3 (dataset1){
    let lowBudget = dataset1.PEOPLE.filter((person) => person.budget < 20)
    let ids = lowBudget.map((person) => person.personId)
    return ids
}

function A4 (dataset1){
    let costDecending = dataset1.GROCERIES.sort((a, b) => {
        if (a.price > b.price){
            return -1
        } else if (a.price < b.price){
            return 1}
            return 0
    })
    let mostExpensive = costDecending.slice(0, 1)
    let name = mostExpensive[0].groceryName
    return name
}

function A5 (dataset1){
    let nullPrice = dataset1.GROCERIES.filter((products) => products.price == null)
    return nullPrice.map((product) => product.groceryName)
}

function A6 (dataset1, string){
    let product = dataset1.GROCERIES.filter((products) => products.groceryName == string)
    return product[0]
}

function A7 (dataset1, number){
    let person = dataset1.PEOPLE.filter((person) => person.personId == number)
    return person[0]
}

function B1 (dataset1){
    let buyFourOrMore = dataset1.PEOPLE.filter((person) => {
        let sum = 0
        for (let i = 0; i < person.shoppingList.length; i++){
            sum += person.shoppingList[i].quantity
        }
         if (sum >= 4){
        return person}
        })
    let names = buyFourOrMore.map((person) => `${person.firstName} ${person.lastName}`)
    return names
}

function B2 (dataset1, number){
    let person = dataset1.PEOPLE.filter((person) => person.personId == number)
    let sum = 0
    for (let i = 0; i < person[0].shoppingList.length; i++){
       let grocery = dataset1.GROCERIES.filter((products) => products.groceryId == person[0].shoppingList[i].groceryId)
       sum += (grocery[0].price * person[0].shoppingList[i].quantity)
       }
    return sum
}

function B3 (dataset1){
    let pepperId = dataset1.GROCERIES.filter((products) => products.groceryName == "Pepper - Jalapeno").map((product) => product.groceryId)
    let people = dataset1.PEOPLE.filter((person) => person.shoppingList.some((item)=> item.groceryId == pepperId))
    let names = people.map((person) => `${person.firstName} ${person.lastName}`)
    return names
}

function B4 (dataset1){
    let people = dataset1.PEOPLE.filter((person) => person.shoppingList.some((item)=> item.groceryId == 37))
    let ids = people.map((person) => person.personId)
    return ids
}

function C1 (dataset1){
    let cantBuy = []
    for (let person of dataset1.PEOPLE){
    let sum = 0
        for (let i = 0; i < person.shoppingList.length; i++){
        let grocery = dataset1.GROCERIES.filter((products) => products.groceryId == person.shoppingList[i].groceryId)
        sum += (grocery[0].price * person.shoppingList[i].quantity)
    }
        if (person.budget < sum){
            cantBuy.push(person)
        }
    }
    let names = cantBuy.map((person) => `${person.firstName} ${person.lastName}`)
    return names
}

function C2(dataset1){
    for (let person of dataset1.PEOPLE){
        let sum = 0
            for (let i = 0; i < person.shoppingList.length; i++){
            let grocery = dataset1.GROCERIES.filter((products) => products.groceryId == person.shoppingList[i].groceryId)
            sum += (grocery[0].price * person.shoppingList[i].quantity)
        }
                person.cost =sum
        }
    let costDecending = dataset1.PEOPLE.sort((a, b) => {
        if (a.cost > b.cost){
            return -1
        } else if (a.cost < b.cost){
            return 1}
        return 0
    })
    let mostExpensive = costDecending.slice(0, 1)
    let name = mostExpensive.map((person) => `${person.firstName} ${person.lastName}`)
    return name[0]
}

function C3(dataset1){
    let sum = 0
    for (let person of dataset1.PEOPLE){
            for (let i = 0; i < person.shoppingList.length; i++){
            let grocery = dataset1.GROCERIES.filter((products) => products.groceryId == person.shoppingList[i].groceryId)
            sum += (grocery[0].price * person.shoppingList[i].quantity)
        }
    }
    let average = (sum / dataset1.PEOPLE.length)
    return average
}