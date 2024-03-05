import { BASE_URL } from "../constants";
import { CameraOptions } from "../interfaces/CameraOptions";
import { LightingOptions } from "../interfaces/LightingOptions";
import { ModelOptions } from "../interfaces/ModelOptions";
import { RenderCrops } from "../interfaces/RenderCrops";
import { RenderTypes } from "../interfaces/RenderTypes";
import { SkinRenderOptions } from "../interfaces/SkinRender";
import { fetchSkinInfo } from "./fetchSkinInfo";

interface SuccessResult {
    success: true,
    buffer: Buffer
    url: string
}

interface FailResult {
    success: false;
    error: string;
}

export type FetchSkinRenderResult = SuccessResult | FailResult

interface CustomOptions {
    camera: Partial<CameraOptions>;
    lighting: Partial<LightingOptions>;
    model: Partial<ModelOptions>;
}

export type FetchSkinRenderOptions = SkinRenderOptions & Partial<CustomOptions>

export async function fetchSkinRender(nickOrUIID: string, options?: FetchSkinRenderOptions): Promise<FetchSkinRenderResult> {
    if (typeof nickOrUIID !== "string"){
        throw new Error(`The nickOrUIID parameter expected the string type but received ${typeof nickOrUIID}`);
    }
    const type = options?.type || RenderTypes.Default
    const crop = options?.crop || RenderCrops.Full

    const url = new URL(BASE_URL + `skin-render/${type}/${nickOrUIID}/${crop}`);

    const loopParams = <T>(obj: T) => {
        for(const key in obj){
            const value = obj[key]
            if (typeof value !== "undefined"){
                url.searchParams.append(key, JSON.stringify(value));
            }
        }
    }

    if (options?.model) loopParams(options.model);
    if (options?.camera) loopParams(options.camera);
    if (options?.lighting) loopParams(options.lighting);
    
    const infoResult = await fetchSkinInfo(nickOrUIID);

    if (!infoResult.success){
        return {
            success: false,
            error: infoResult.error
        }
    }

    const response = await fetch(url.href);
    const arrayBuffer = await response.arrayBuffer();

    return {
        success: true,
        buffer: Buffer.from(arrayBuffer),
        url: response.url as string
    }
}