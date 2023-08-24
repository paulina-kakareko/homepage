import podatek, { calculate, myFavouriteColor } from "./calculate"

console.log(podatek)

console.log(calculate(2))

console.log(myFavouriteColor)

console.log('hello')

 // function changing the header from Hello! to Goodbay!
 
    document.querySelector('#change_header').onclick = function() {
        if (document.querySelector('h1').innerHTML === "Hello!") {
            document.querySelector('h1').innerHTML = "Goodbay!"
        } else {
            document.querySelector('h1').innerHTML = "Hello!"
        }
        
    }

    // function changing header's colour
   
        document.querySelectorAll('.button').forEach(function(button) {
            button.onclick = function() {
                document.querySelector('h1').style.color = button.dataset.color
            }
        })
    

    // function calculate

    function calculate(myNumber) {
        return myNumber*7
    }

    console.log(calculate(7))

    // obiekt deathStar

    const deathStar = {
        diameter: 120000,
        fire: (target) => {
            console.log(`${target} destroyed `)
        },
        isOperating: true,
        levels: 1233,
        name: "Death Star",
        population: 1000

    }

    deathStar.fire('cos')
    console.log(deathStar.name)
    console.log(deathStar['levels'])