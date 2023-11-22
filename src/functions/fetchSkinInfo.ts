import { BASE_URL } from "../constants";
import { SkinInfo } from "../interfaces/SkinInfo";

export async function fetchSkinInfo(nickOrUIID: string): Promise<Partial<SkinInfo> | null>  {
    if (typeof nickOrUIID !== "string"){
        throw new Error(`The nickOrUIID parameter expected the string type but received ${typeof nickOrUIID}`);
    }
    const url = BASE_URL + `skin-render-info/${nickOrUIID}`;
    const data = await fetch(url)
    if (data.ok) {
        return await data.json()
    }
    return null
}