export const validateBirthday= (birthday)=>{

        var hoy = new Date();
        var cumpleanos = new Date(birthday);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

    return edad >= 18  
}



