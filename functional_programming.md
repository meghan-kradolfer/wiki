# Functional Programming

## Higher order functions
* In javascript functions are values
* the most common H.O.F is filter
```
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
var notDogs = animals.reject(isDog)
```
* Map - goes through an array and transforms the object
```
var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
})
```
ES6:
```
var names = animals.map((x) =>  x.name + ' is a ' + x.species)
```
* Reduce - 