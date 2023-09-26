//16
const Shopps = [
    {name: "Ofogh", storeNumber: 520, sale: 300000,},
    {name: "Pinar", storeNumber: 120, sale: 650000,},
    {name: "Razi", storeNumber: 220, sale: 400000,},
    {name: "Iranian", storeNumber: 590, sale: 500000,}
]

let payment = 0;
let maxSale = -Infinity;

Shopps.map((store) =>{
    if(store.sale <= 500000){
        payment = .03 * store.sale;
        console.log(
            'Store number: ', store.storeNumber , '\n',
            'Store sales: ', store.sale , '\n',
            'Seller payment', payment, '\n'
        );
    }
    else if(500000 < store.sale < 700000){
        payment = .05 * store.sale;
        console.log(
            'Store number: ', store.storeNumber , '\n',
            'Store sales: ', store.sale , '\n',
            'Seller payment', payment, '\n'
        );
    }
    
    console.log(Math.max(store.sale));

    
})