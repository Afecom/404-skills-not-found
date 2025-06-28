// Practice number 1

let age = 49
let name = "Kebede"

console.log(name + " is " + (age < 12 ? "A boy" : age > 12 && age < 20 ? "A teenager" : "A Man"))

// Practice number 2!

const name1 = "seid"

switch(name1){
    case("amir"): console.log("yo amir")
    break;

    case("ejaz"): console.log("yoo JZ")
    break;

    case("seid"): console.log("seya lala")
    break;

    default: console.log("couldn't get anyone!")
}

for (let i = 0; i < 5; i++){
    let row = ''
    for (let j = 0; j <= i; j++)
    {
        row += '*'
    }
    console.log(row)
}

//Function practice
