import { BASE_URL } from "../constants";
import { CameraOptions } from "../interfaces/CameraOptions";
import { ExportSkinType } from "../interfaces/ExportSkinType";
import { LightingOptions } from "../interfaces/LightingOptions";
import { ModelOptions } from "../interfaces/ModelOptions";
import { RenderCrops } from "../interfaces/RenderCrops";
import { RenderTypes } from "../interfaces/RenderTypes";
import { SkinRenderOptions } from "../interfaces/SkinRender";

type GetExportType<T extends ExportSkinType> =
T extends "url" ? string
: T extends "buffer" ? Buffer
: string

interface CustomOptions {
    camera: Partial<CameraOptions>;
    lighting: Partial<LightingOptions>;
    model: Partial<ModelOptions>;
}

type FetchSkinRenderOptions = SkinRenderOptions & Partial<CustomOptions>

export async function fetchSkinRender<E extends ExportSkinType>
(nickOrUIID: string, options?: FetchSkinRenderOptions & { export?: E }):
Promise<GetExportType<E> | null>
{
    if (typeof nickOrUIID !== "string"){
        throw new Error(`The nickOrUIID parameter expected the string type but received ${typeof nickOrUIID}`);
    }
    const type = options?.type || RenderTypes.Default
    const crop = options?.crop || RenderCrops.Full
    const exportType = options?.export || "url"

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
    
    const data = await fetch(url.href)

    if (!data.ok) return null;
    if (exportType == "buffer"){
        const blob = await data.blob()
        const arrayBuffer = await blob.arrayBuffer();
        return Buffer.from(arrayBuffer) as GetExportType<E>;
    }
    return data.url as GetExportType<E>;
}