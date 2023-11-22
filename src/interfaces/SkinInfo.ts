import { ModelType } from "./ModelOptions"

export interface SkinInfo {
    /** The UUID of the requested player. */
    playerUUID: string;
    /** The link to the players skin file. If the skinURL parameter is defined this will change to match it. */
    skinUrl: string;
    /** The link to the players cape file. */
    userCape: string;
    /** If the skin's texture height is equal to 32 pixels indicating a classic skin is present, this value will generate a base64 copy of the skin converted to 64x64. */
    processedSkinUrl: string;
    /** Defines whether the geometry for your model is slim or wide. If the skinType parameter is defined this will change to match it. */
    skinType: ModelType;
    /** The width in pixels of the player's skin. Will default to 64 when the skinUrl parameter is defined. */
    skinTextureWidth: number;
    /** The height in pixels of the player's skin. Will default to 64 when the skinUrl parameter is defined. */
    skinTextureHeight: number;
}