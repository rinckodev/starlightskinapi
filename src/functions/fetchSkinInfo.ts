import { BASE_URL } from "../constants";
import { SkinInfo } from "../interfaces/SkinInfo";

type SuccessResult = {
    success: true,
} & Partial<SkinInfo>

interface FailResult {
    success: false;
    error: string;
}

type FetchSkinInfoResult = SuccessResult | FailResult

export async function fetchSkinInfo(nickOrUIID: string): Promise<FetchSkinInfoResult>  {
    if (typeof nickOrUIID !== "string"){
        throw new Error(`The nickOrUIID parameter expected the string type but received ${typeof nickOrUIID}`);
    }
    const url = BASE_URL + `skin-render-info/${nickOrUIID}`;
    
    const response = await fetch(url)
    const data = await response.json();
    if (data?.error){
        return {
            success: false,
            error: data.error
        }
    }
    return {
        success: true,
        ...data
    }
}