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
* Reject - removes all specified from array
```
var notDogs = animals.reject(isDog)
```
* Find - finds in a array but only returns the first item
* Reduce - can be used for any list transformation
```
var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

var totalAmounts = orders.reduce(function(sum, order) {
    // sum is the value of the past function, the first being '0'
    return sum + order.amount
}, 0) 

```