let form = document.querySelector('#form')
let yourName = document.querySelector('.name');
let yourAge = document.querySelector('.age');
let yourHeight = document.querySelector('.height');
let yourHair = document.querySelectorAll('.length');
let yourCourse = document.querySelector('.course');
let attend = document.querySelector('.attendance')
let submit = document.querySelector('.submit');
let display = document.getElementById('display')
let hairValue;

yourHair.forEach(length => {
    length.addEventListener('click', ()=>{
        hairValue = length.value
    })
})

class Person{
    constructor(name,age,height,hair){
        this.fullName = yourName;
        this.age = yourAge;
        this.height = yourHeight;
        this.hairLength = yourHair;
    }

    details(){
        let acceptedHair;
        if(hairValue === 'short'){
            acceptedHair = 'accepted'
        }else{
            acceptedHair = 'not accepted'
        }
        return `Dear ${yourName.value} your hair length being ${hairValue} you therefore are ${acceptedHair}`
    }
}

class Cheta extends Person{
    constructor(yourName, yourAge, yourHeight, yourHair, yourCourse, attending){
        super(yourName, yourAge, yourHeight, yourHair)
        this.course = yourCourse;
        this.attending = attend;
    }

    attendance(){
        return`${this.fullName}, a student of ${this.yourCourse} attends class ${this.attending}`
    }
}

submit.addEventListener('click', (event) =>{
    console.log(yourName.value, yourAge.value, yourHeight.value)
    let myName = yourName.value
    let Age = yourAge.value
    let Height = yourHeight.value
    let Course = yourCourse.value
    let attendanceReport = attend.value
    
    let newCheta = new Cheta(myName, Age, Height, Course, hairValue, attendanceReport)
    
    display.innerHTML = newCheta.details()
    console.log(newCheta.details())
    
    event.preventDefault()
})