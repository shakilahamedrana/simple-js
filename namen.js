
function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid..!Please..String data types..'
    }

    if (name.toLowerCase().charAt(name.length - 1) === 'a' ){
        return 'Good Name'
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'e'){
        return 'Good Name' 
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'y'){
        return 'Good Name' 
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'i'){
        return 'Good Name' 
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'o'){
        return 'Good Name' 
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'u'){
        return 'Good Name' 
    }
    else if(name.toLowerCase().charAt(name.length - 1) === 'w'){
        return 'Good Name' 
    }
    else{
        return 'Bad Name'
    }
}


