import { ChangeUser } from "../../services/fetchUserServices.js";

export async function ModDescription(e) {

    let request = {
        description: e.target.value
    }

    let response = await ChangeUser(request);
}