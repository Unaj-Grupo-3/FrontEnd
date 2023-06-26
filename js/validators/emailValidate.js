export const validate = (email) => {

    let expresion= new RegExp("^[A-Za-zÀ-ÿ_@.0-9&\s]+$");

    if(email.includes('@') && expresion.test(email)){
        return true;
    }
    else{
        return false;
    }
}
