//4
let N = 24;
let X = 2;
let P = 0;
let S = 0;
let Sin = 0;
let T = 0;

//Alef
for(let i=3 ;i<=N ;i+=3){P += 1/i;
}console.log('P= ' , P);

//Be
for(let i=0 ;i<=N ;i++){S+= X**i;
}console.log('S= ',S);

//Jim
for(let i=X ;i<=N ;i++){Sin += X**(2*N-1)/(2*N-1)
}console.log(Sin);

//Dal
for(let i=1 ;i<=N ;i++){T += i*(i-1);
}
console.log('T= ',T);