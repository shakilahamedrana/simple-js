function password(obj) {
    if(!obj.name || !obj.birthYear|| obj.birthYear < 1000 || obj.birthYear > 9999 || !obj.siteName){
    return 'Invalid... Input correct now'
    }
    let upper = obj.siteName.split('');
    let upperWord = '';
    for(let i = 0 ; i < upper.length ; i++){
        if(i == 0){
            upperWord += upper[i].toUpperCase()
        }
        else{
            upperWord += upper[i]
        }
    }
    let result = upperWord.concat('#').concat(obj.name).concat('@').concat(obj.birthYear)
    return result;
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))