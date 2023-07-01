import { CreateAuth } from "../js/services/fetchAuthServices.js";


for (let index = 1; index < 101; index++) {
    let data  = await CreateAuth({
        "email": `mail${index}@expresso.com`,
        "password": "Express0."
      })
    console.log(data)
}
