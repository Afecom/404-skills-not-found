function ageCalc(DateOfBirth = "2000"){
    const currentYear = new Date().getFullYear();
    return currentYear - DateOfBirth;
}

console.log(ageCalc(2004))
console.log(ageCalc())

let my_age = ageCalc(2004)

if(my_age > 65){
    console.log("You have retired")
}
else if(my_age < 65){
    console.log("You still have to work:) ")
}