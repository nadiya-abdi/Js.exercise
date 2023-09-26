//22
function generate(){
    const result=[];
    for(let tense=0; tense<=9 ;tense+=2){
        for(let ones=0;ones<=9 ;ones++){

            const hundreds =ones;
            const number =hundreds*100 +tense*10+ones;
            result.push(number)
            
        }
    }
return result;
}
const numbers =generate();
console.log(numbers);