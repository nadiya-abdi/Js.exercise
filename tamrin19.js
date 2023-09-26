//19
let N=12;
function Calculate(N){

let zerocount=0;
let oddcount= 0;
let evencount= 0;
if( N===0){
    zero= 1;
}
else {
    while(N> 0){
    const digit = N% 10;
        
if(digit % 2 === 0){
    evencount;
} else{
    oddcount;
}
if(digit === 0){
zerocount;
}}
}
return{
    oddcount,evencount,zerocount
}
}console.log(Calculate());