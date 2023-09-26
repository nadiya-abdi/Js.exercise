//11 age add mazrab 4 nabashe mizane 0
let N = 24;
let count = 0;
let jam = 0;
for (let i=1 ;i<=N ; i++){
    if(N % i===0 &&i%4 ===0){
        count += 1;
        jam +=i;
        console.log(i);
    }
}
console.log('count= ',count);
console.log('jam= ',jam);