// import { RenderCrops, RenderTypes, fetchSkinInfo, fetchSkinRender } from "../src";

// async function main(){
//     const skinUrl = await fetchSkinRender<"url">("RinckoZ_", {
//         type: RenderTypes.Dungeons,
//         crop: RenderCrops.Full,
//     })
//     if (!skinUrl) return;

//     console.log(skinUrl)

//     const renderResult = await fetchSkinRender("nickOrUIID", {
//         type: RenderTypes.Default,
//         crop: RenderCrops.Full,
//         export: "buffer",
//         model: {
//             skinUrl: "https://example.com/skin.png",
//             skinType: "wide",
//             // ... other model options ...
//         },
//         camera: {
//             cameraPosition: { x: "11.92", y: "15.81", z: "-29.71" },
//             // ... other camera options ...
//         },
//         lighting: {
//             dirLightPos: { x: "-10", y: "10", z: "-10" },
//             // ... other lighting options ...
//         },
//     });
// }
// main()

import { RenderCrops, RenderTypes, fetchSkinRender } from "../src";
import { writeFile } from "node:fs/promises"

async function main(){
    const playerNickname = "RinckoZ_";

    const renderResult = await fetchSkinRender(playerNickname, {
        type: RenderTypes.Default,
        crop: RenderCrops.Full,
        export: "buffer",
        model: {
            capeEnabled: true,
            // ... other model options ...
        },
        camera: {
            cameraPosition: { x: "10", y: "10", z: "-20" },
            cameraWidth: 720,
            cameraHeight: 1080,
            // ... other camera options ...
        },
        lighting: {
            dirLightPos: { x: "-10", y: "10", z: "-10" },
            // ... other lighting options ...
        },
    });

    if (renderResult){
        await writeFile("./customized.png", renderResult);
    }
}
main();