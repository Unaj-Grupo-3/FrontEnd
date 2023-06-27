export const validatePassword= (password)=>{
    
    let expresion= new RegExp("[A-Z]");
    let expresion1= new RegExp("[a-z]");
    let expresion2= new RegExp("[ñÑ\\-_¿.#¡/()*,.;:@]");
    let expresion3= new RegExp("[1234567890]")
    
    if(password.length<8 || password.length>32){
        return false
    }
    if(expresion.test(password) && expresion1.test(password) && expresion2.test(password) && expresion3.test(password)){
        return true;
    }
    else{
        return false;
    }
}


