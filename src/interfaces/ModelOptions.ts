export type ModelType = "slim" | "wide";
export interface ModelOptions {
    /**
     * - This parameter allows the user to define a skin image to use using a url.
     * - Default Value: Value changes based on player name/uuid.
     */
    skinUrl: string;
    /**
     * - Must be used with skinUrl, this parameter allows you to choose whether the geometry for your model is slim or wide.
     * - Default Value: `wide`
     */
    skinType: ModelType;
    /**
     * - A link to the model the API will use in the case of a players skin using the wide format. (Must be used with the custom render type.)
     * - Default Value: Value changes based on render type.
     */
    wideModel: string;
    /**
     * - A link to the model the API will use in the case of a players skin using the slim format. (Must be used with the custom render type.)
     * - Default Value: Value changes based on render type.
     */
    slimModel: string;
    /**
     * - This parameter allows the user to define a OBJ model using a url that can be used as a prop.
     * - Default Value: Value changes based on render type.
     */
    propModel: string;
    /**
     * - Must be used with propModel, this parameter allows the user to choose the texture applied to the prop.
     * - Default Value: Value changes based on render type.
     */
    propTexture: string;
    /**
     * - Must be used with the custom render type, this parameter allows the user to choose a custom OBJ cape model to be applied to the scene. When left blank no cape will apply.
     * - Default Value: Value changes based on render type.
     */
    capeModel: string;
    /**
     * - Can be defined on any 3D render, this allows the user to define a custom cape texture to apply to the cape model. When left blank the players default cape will apply.
     * - Default Value: Value changes based on player name/uuid.
     */
    capeTexture: string;
    /**
     * - Allows the user to choose whether capes can render on their renders.
     * - Default Value: `true`
     */
    capeEnabled: boolean;
    /**
     * - Allows the user to choose whether or not shading is enabled for the prop model.
     * - [MeshLambertMaterial](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial) when true, [MeshBasicMaterial](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) when false.
     * - Default Value: `true`
     */
    propModelShading: boolean;
    /**
     * - Allows the user to choose whether or not shading is enabled for the cape model.
     * - [MeshLambertMaterial](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial) when true, [MeshBasicMaterial](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) when false.
     * - Default Value: `true`
     */
    capeModelShading: boolean;
    /**
     * - Allows the user to choose whether or not shading is enabled for the player model.
     * - [MeshLambertMaterial](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial) when true, [MeshBasicMaterial](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) when false.
     * - Default Value: `true`
     */
    playerModelShading: boolean;
}
