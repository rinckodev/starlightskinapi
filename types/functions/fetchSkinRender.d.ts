/// <reference types="node" />
import { CameraOptions } from "../interfaces/CameraOptions";
import { ExportSkinType } from "../interfaces/ExportSkinType";
import { LightingOptions } from "../interfaces/LightingOptions";
import { ModelOptions } from "../interfaces/ModelOptions";
import { SkinRenderOptions } from "../interfaces/SkinRender";
type GetExportType<T extends ExportSkinType> = T extends "url" ? string : T extends "buffer" ? Buffer : string;
interface CustomOptions {
    camera: Partial<CameraOptions>;
    lighting: Partial<LightingOptions>;
    model: Partial<ModelOptions>;
}
type FetchSkinRenderOptions = SkinRenderOptions & Partial<CustomOptions>;
export declare function fetchSkinRender<E extends ExportSkinType>(nickOrUIID: string, options?: FetchSkinRenderOptions & {
    export?: E;
}): Promise<GetExportType<E> | null>;
export {};
