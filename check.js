
function checkName(name) {
    if (typeof name !== 'string' || parseInt.name) {
        return 'Invalid..!Please..String data types..'
    }

    let arry = name.toLowerCase().split('');
    let check = arry.length - 1;

    else if(arry[check] == 'a'){
        return 'Good name'
    }
    else{
        return 'Bad Name'
    }

}

console.log(checkName('Salman'))