export const validateFile= (file)=>{
    
    let extension = ["jpg", "jpeg", "png", "gif", "avif", "webp"];

    let extensionFile = file.type.split("/")[1]

    if(extension.indexOf(extensionFile) == -1){

        return {
            valid : false,
            error : "El archivo no es del formato correcto"
        };
    }   


    if(file.size > 5 * 1024 * 1024  ){  // !OTO NO SUPERIOR A LOS 5MB
        return {
            valid : false,
            error : "La foto es pesada (hasta 5MB)"
        };
    }


    return {
        valid : true,
        error : ""
    }
}
