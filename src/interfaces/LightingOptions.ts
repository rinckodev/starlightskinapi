interface CameraCoords {
    x: string;
    y: string;
    z: string;
}
export interface LightingOptions {
    /**
     * - Defines the coordinates of the directional light used in the scene.
     * - Default Value: Value changes based on render type.
     * - All renders: `{"x":"-10","y":"10","z":"-10"}`
     * - relaxing: `{"x":"10","y":"10","z":"-10"}`
     * - cowering: `{"x":"10","y":"10","z":"-10"}`
     */
    dirLightPos: CameraCoords
    /**
     * - This value allows the user to set the color of the directional light used in the scene. Allows hexadecimal color values, such as: "b300ff."
     * - Default Value: `ffffff`
     */
    dirLightColor: string;
    /**
     * - This numerical value acts as an adjustment to the global lighting setup's original light level.
     * - Default Value: `0`
     */
    dirLightIntensity: number
    /** 
     * - This value allows the user to set the color of the global light used in the scene. Allows hexadecimal color values, such as: "0040ff."
     * - Default Value: `ffffff`
     */
    globalLightColor: string
    /**
     * - This numerical value acts as an adjustment to the global lighting setup's original light level.
     * - Default Value: `0`
     */
    globalLightIntensity: number
}