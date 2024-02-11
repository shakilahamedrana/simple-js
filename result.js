function calculateMoney(ticketrSale) {
    if (0 > ticketrSale) {
        return "Invalid Number";
    } else {
        let ticketAmount = 120 * ticketrSale;
        let daruyan = 500;
        let strap = 50 * 8;
        const totelKhoroj = daruyan + strap;
        const totelAmount = ticketAmount - totelKhoroj;
        return totelAmount;
    }
}

function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return 'Invalid Array'
    }
    let newArray = [];
    for(let solo of array){
        if(typeof solo === 'number' && !isNaN(solo)){
            newArray.push(solo)
        }
    }
    return newArray;
}





function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid'
    }
    let jug = 0 ;
    for(let solo of arr){
        if(solo >= 3000){
            let partwenty = solo - (solo * (20/100));
            jug = jug + partwenty;
        }else{
            jug = jug + solo;
        }
    }
    let saving = jug - livingCost;
    if(saving < 0){
        return 'earn money'
    }
    else{
        return saving
    }
}