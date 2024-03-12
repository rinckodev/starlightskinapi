import { BASE_URL } from "../constants";
import { SkinInfo } from "../interfaces/SkinInfo";

type FetchSkinInfoSuccessResult = {
    success: true,
} & Partial<SkinInfo>

interface FetchSkinInfoFailResult {
    success: false;
    error: string;
}

export type FetchSkinInfoResult = FetchSkinInfoSuccessResult | FetchSkinInfoFailResult
export type SkinInfoResult<Success extends boolean> = Extract<FetchSkinInfoResult, { success: Success }> 

export async function fetchSkinInfo(nickOrUIID: string): Promise<FetchSkinInfoResult>  {
    if (typeof nickOrUIID !== "string"){
        throw new Error(`The nickOrUIID parameter expected the string type but received ${typeof nickOrUIID}`);
    }
    const url = BASE_URL + `info/user/${nickOrUIID}`;
    
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