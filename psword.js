function password(obj) {
    if(!obj.name || !obj.birthYear|| obj.birthYear < 1000 || obj.birthYear > 9999 || !obj.siteName){
        return 'invalid'
    }

    
    
}


console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))