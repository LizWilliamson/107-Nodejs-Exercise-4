function solveHomework(){
    var data = [
        {
            age: 99,
            name: "Sergio",
            color: "Grey"
        },
        {
            age: 23,
            name: "John",
            color: "Blue"
        },
        {
            age: 27,
            name: "Alice",
            color: "Pink"
        },
        {
            age: 87,
            name: "Robert",
            color: "Grey"
        },
        {
            age: 23,
            name: "Sheldon",
            color: "Black"
        },
        {
            age: 45,
            name: "Will",
            color: "Green"
        },
        {
            age: 16,
            name: "Kevin",
            color: "Yellow"
        },
        {
            age: 37,
            name: "Liz",
            color: "Pink"
        },
        {
            age: 98,
            name: "Noah",
            color: "White"
        },
        {
            age: 31,
            name: "Alfredo",
            color: "White"
        },
        {
            age: 74,
            name: "Rhenard",
            color: "Green"
        },
        {
            age: 39,
            name: "Myk",
            color: "Blue"
        },
        
        
    ]

    var sumOfAges = 0;
    var oldestAge = 0;
    var oldestName = "";
    var youngestAge = 999;
    // could also use var youngestAge = date[0].age to start with the first in the array
    var youngestName = "";
    // var youngestName - data[0].name

    for (var i = 0; i < data.length; i++){
        var person = data[i];
        
        sumOfAges+=person.age;
        // console.log(person.name);

        // compare the age of the person with oldest
        if(person.age > oldestAge){
            oldestAge = person.age;
            oldestName = person.name;
        }

        if(person.age < youngestAge){
            youngestAge = person.age;
            youngestName = person.name;
        }
            
    }
    console.log("Oldest is: " + oldestName + " and he/she is " + oldestAge + " years old.")
    console.log("Youngest is: " + youngestName + " and he/she is " + youngestAge + " years old.")
    console.log("Answer 3: ", sumOfAges);
}

solveHomework();



// who is the oldest?
// who is the youngest
// Sum of all ages