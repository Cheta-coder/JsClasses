let form = document.querySelector('#form')
let yourName = document.querySelector('.name');
let yourAge = document.querySelector('.age');
let yourHeight = document.querySelector('.height');
let yourHair = document.querySelectorAll('.length');
let yourCourse = document.querySelector('.course');
let attendance = document.querySelector('.attendance')
let submit = document.querySelector('.submit');
let hairLength;
let display = document.querySelector('.p')

yourHair.forEach(length => {
    length.addEventListener('click', ()=>{
        hairLength = length.value
        console.log(hairLength)
    })
})

class Person{
    constructor(name,age,height,hair){
        this.fullName = name;
        this.age = age;
        this.height = height;
        this.hairLength = hair;
        // this.courseRegistered = course;
    }

    details(){
        let acceptedHair;
        if(this.hairLength === 'short'){
            acceptedHair = 'accepted'
        }else{
            acceptedHair = 'not accepted'
        }
        return `your hair length being ${this.hairLength} you are ${acceptedHair}`
    }
}

class Cheta extends Person{
    constructor(name, age, height, course, hair, attendance){
        super(name, age, height, hair)
        this.yourCourse = course
        this.attendance = frequency
    }

    attendance(){
        return`${this.fullName}, a student of ${this.yourCourse} attends class ${this.attendance}`
    }
}

submit.addEventListener('click', (event) =>{
    for(let i = 0; i < localStorage.length; i++){

        let name = yourName.value
        let age = yourAge.value
        let height = yourHeight.value
        let course = yourCourse.value
        
        let newCheta = new Cheta(name,age,height,hair,course,attendance)
        
        display.innerHTML = newCheta.details()
    }
        console.log(display.innerHTML)


    event.preventDefault()
})