import { SkinInfo } from "../interfaces/SkinInfo";
type SuccessResult = {
    success: true;
} & Partial<SkinInfo>;
interface FailResult {
    success: false;
    error: string;
}
type FetchSkinInfoResult = SuccessResult | FailResult;
export declare function fetchSkinInfo(nickOrUIID: string): Promise<FetchSkinInfoResult>;
export {};
