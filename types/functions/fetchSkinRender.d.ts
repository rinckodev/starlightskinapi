/// <reference types="node" />
import { CameraOptions } from "../interfaces/CameraOptions";
import { LightingOptions } from "../interfaces/LightingOptions";
import { ModelOptions } from "../interfaces/ModelOptions";
import { SkinRenderOptions } from "../interfaces/SkinRender";
interface SuccessResult {
    success: true;
    buffer: Buffer;
    url: string;
}
interface FailResult {
    success: false;
    error: string;
}
type FetchSkinRenderResult = SuccessResult | FailResult;
interface CustomOptions {
    camera: Partial<CameraOptions>;
    lighting: Partial<LightingOptions>;
    model: Partial<ModelOptions>;
}
type FetchSkinRenderOptions = SkinRenderOptions & Partial<CustomOptions>;
export declare function fetchSkinRender(nickOrUIID: string, options?: FetchSkinRenderOptions): Promise<FetchSkinRenderResult>;
export {};
