var animals = [
    {name: "fluffly", species: "rabbit"},
    {name: "caro", species: "dog"},
    {name: "hamilton", species: "dog"},
    {name: "harold", species: "fish"},
    {name: "ursula", species: "cat"}
]

var isDog = function(animal) { // Callback function
    return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
console.log(dogs);