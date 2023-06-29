export const validateNombre= (nombre)=>{
    
    let expresion1= new RegExp("[\\-_¿.#¡/()*,.;:@$]");
    let expresion2= new RegExp("[1234567890]")
    
    if(nombre.length >50){
        return false
    }
    if(!expresion1.test(nombre) && !expresion2.test(nombre)){
        return true;
    }
    else{
        return false;
    }
}



