//12  
const N= 754;
let min =0;
let max =1000;
let mid =0;

while (true){
    mid =(min+max)/2;
    if (N >mid){
    min =mid;
}else if(N <mid){
    max =mid;
}else{
    break;
}
}
let midRound =Math.floor(mid);
console.log(midRound);