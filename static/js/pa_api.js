import {getCookie} from "./cookies.js";

export async function getPersonID() {
    const pa_token = getCookie("pa-token");
    if (pa_token == null || pa_token === "") {
        return "";
    }
    let resp = await fetch(
        "https://api.752628.xyz/v2/user/id/get",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "pa-token": getCookie("pa-token")
            }
        }
    );
    if (resp.status !== 200){
        return "";
    }
    let parsedJSON = await resp.json();
    return parsedJSON["person_id"];
}