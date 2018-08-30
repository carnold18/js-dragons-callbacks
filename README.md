# js-dragons-I
This is a practice problem to test your knowledge of callbacks in JavaScript.

## Instructions
* Fork this repo
* Open the index html and use the chrome console to test your code
* Implement the deliverables in index.js
* When your finished, submit a pull request and I will review your code with you

## Deliverables
* A function named `whenAwake`. It should accept a function as an argument.
* A function named `wakeUp`. It should call all functions passed to `whenAwake`

## Example Usage:
```
whenAwake(function(){
    console.log('Rooooaooaooaooar!!!!')
})

whenAwake(function(){
    console.log('Eat Breakfast')
})

whenAwake(function(){
    console.log('Obsess over gold')
})

wakeUp() 

// in console:
// Rooooaooaooaooar!!!
// Eat Breakfast
// Obsess over gold

```

// Bonus
* Have `wakeUp` accept an argument of `mood`. Then find a way to pass it to each of the functions which have been passed to `whenAwake`, so that each function can behave differently depending on the dragons mood when he wakes up:

``` 
whenAwake(function(mood){
    if(mood == 'Angry'){
        console.log('Rooooaooaooaooar!!!!')
    } else {
        console.log('Puuuur')
    }
})

whenAwake(function(mood){
    if(mood == 'Angry'){
        console.log('Eat a farmer!')
    } else {
        console.log('Eat a fish')
    }
})

whenAwake(function(){
    if(mood == 'Angry'){
        console.log('Angrily obsess over gold')
    } else {
        console.log('Still obsess over gold, but less angrily)
    }
})

wakeUp('Angry') 

// in console:
// 'Rooooaooaooaooar!!!!'
// Eat a farmer!
// Angrily obsess over gold
```