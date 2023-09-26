//6
function calculate(number) {
    let sumofDigits =0;
    while(num>0){
        sumofDigits +=num %10;
        num =Math.floor(nm /10);
    }
    if(sumofDigits===0){
        return false ;
    }
    return number % sumofDigits===0;
}
const result =calculate(18);
console.log(result);