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


    // function changing the contenf of h2

    // document.querySelector('#buttonToChangeH2').onclick = function() {
    //     document.querySelector('h2').innerHTML = "Klik klik"
    // }

   //addEventListener function

   function handleClick() {
    document.querySelector('h2').innerHTML = "Klik klik"
   }

   const button = document.querySelector('#buttonToChangeH2')
   button.addEventListener('click', handleClick)

   console.log(button.classList)
   button.classList.add('special3')
   console.log(button.classList)


    // function changing header's colour
   
        document.querySelectorAll('.button').forEach(function(button) {
            button.onclick = function() {
                document.querySelector('h1').style.color = button.dataset.color
            }
        })
    

    // function calculate

   

  

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

    document.cookie = 'cookie1 = costam'
    document.cookie = 'cookie2 = costam2'


    const czlowiek = {
        name : 'Jan',
        age : 35
    }

    localStorage.setItem('test', JSON.stringify(czlowiek))
    const costam = localStorage.getItem('test')

    console.log(JSON.parse(costam))


    // JSON, metody parse & stringify

    try {
        const myObject = {
            name : 'Kasia',
            age : 35,
            say: () => console.log('hello'),
            hobby : ['sport', 'taniec']
        }
    
        console.log(myObject)
        console.log(typeof myObject)
    
        const myString = JSON.stringify(myObject)
        console.log(myString)
        console.log(typeof myString)
    
        const myObjectAgain = JSON.parse(myString)
        console.log(myObjectAgain)
        console.log(typeof myObjectAgain)
    }   catch(e) {
        console.log(e)
    }

   
// funkcja powitalna z parametrami 


function tralala(imie, wiek) {
    console.log(`Mam na imię ${imie} i mam ${wiek} lat.`)
}

tralala('Kasia', 18)

const powitanie = (imie, wiek) => `Mam na imię ${imie} i mam ${wiek} lat.`
console.log(powitanie('Jan', 18))

//pzykładowa tablica 

const hardware = ['keybord', 'mouse', 'screen']

const news = [
    {title: 'wtf',
content: 'lorem ipsum...'},
{
    title: 'co ten frontend',
    content: 'lorem ipsum...',
    link: 'https://cotenfrontend.pl'
}
]

console.log(hardware[1])
console.log(hardware.length)


const myText = "dowolny tekst bla bla"


const znajdz = 'dowolny'

if (myText.indexOf(znajdz) >= 0) {
    console.log(`${znajdz} znaleziono`) 
} else {
    console.log(`${znajdz} nie znaleziono`)
}



const textLength = myText.length
console.log(myText[textLength-1])


const Camera = {
    price: 100,
    size: "small"
}

hardware.push(Camera)
console.log(hardware)

hardware.unshift('test')
console.log(hardware)

console.log(hardware.indexOf(Camera))

const newHardware = hardware.slice(0,2)

console.log(newHardware)


const hamburger = document.querySelector('.hamburger--js')
console.log(hamburger)

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js').classList.toggle('navigation--open')
} )