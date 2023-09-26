//15

const people = [{name: "Nadiya", diplomCode: 0, age: 21, majorCode: 24, genderCode: 0},
    {name: "Gilda", diplomCode: 1, age: 16, majorCode: 3, genderCode: 0},
    {name: "Ali", diplomCode: 2, age: 26, majorCode: 24, genderCode: 1},
    {name: "Sara", diplomCode: 2, age: 18, majorCode: 24, genderCode: 0},
]
let count1 = 0;
let count2 = 0;
let count3 = 0;
people.map((student) =>{
    if(student.majorCode===24 &&
         student.genderCode===1){
        count1 += 1
}
    if(student.age < 18){
        count2 += 1
}
    if(student.majorCode === 24){
        count3 += 1

}    
})

let percentage = count3/ people.length * 100 ;
console.log(count1);
console.log(count2);
console.log(percentage , "%");