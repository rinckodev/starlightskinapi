# Starlight SkinAPI Wrapper
<p align="center">
    <img src="./assets/images/logo.png" width=450>
</p>

This package is a Starlight SkinAPI wrapper

Oficial Starlight SkinAPI Documentation : https://docs.lunareclipse.studio/

### Installation
```bash
npm install starlightskinapi
```

fetchSkinInfo function usage:
```ts
import { fetchSkinInfo } from "starlightskinapi";

async function main(){
    const playerNickname = "RinckoZ_";
    const infoResult = await fetchSkinInfo(playerNickname)

    if (infoResult.success){
        console.log(infoResult.playerUUID)
        console.log(infoResult.skinUrl)
        console.log(infoResult.userCape)
        console.log(infoResult.skinTextureWidth)
        console.log(infoResult.skinTextureHeight)
    }
}
main();
```
Output:
```bash
f169e30f110943dfba445da3b7dee1ce
http://textures.minecraft.net/texture/4d24cc4874ba673963ca57818a0be02666aa80f4747d00b45571e380ed9b54f7
http://textures.minecraft.net/texture/2340c0e03dd24a11b15a8b33c2a7e9e32abb2051b2481d0ba7defd635ca7a933
64
64
```

If the nick or uuid is not found, success will be false, and you will have the error property
```ts
async function main(){
    const playerNickname = "NicknameVeryLongAndUnlikely";
    const infoResult = await fetchSkinInfo(playerNickname)

    if (!infoResult.success){
        console.log(infoResult.error)
    }
}
main();
```

Output: 
```bash
Unknown player username/uuid.
```

See how to get a render pose

```ts
import { RenderCrops, RenderTypes, fetchSkinRender } from "starlightskinapi";
import { writeFile } from "node:fs/promises"

async function main(){
    const playerNickname = "RinckoZ_";
    const renderResult = await fetchSkinRender(playerNickname, {
        type: RenderTypes.Default,
        crop: RenderCrops.Full,
    })

    if (!renderResult.success){
        console.log(renderResult.error)
        return;
    }

    if (renderResult.success){
        const { buffer, url } = renderResult;
        console.log(url) // 
        await writeFile("./render.png", buffer);
    }
}
main();
```
Output:

<img src="assets/images/render.png" width=100>

You can customize the model, camera and lighting options

```ts
import { RenderCrops, RenderTypes, fetchSkinRender } from "starlightskinapi";
import { writeFile } from "node:fs/promises"

async function main(){
    const playerNickname = "RinckoZ_";

    const renderResult = await fetchSkinRender(playerNickname, {
        type: RenderTypes.Default,
        crop: RenderCrops.Full,
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

    if (!renderResult.success){
        console.log(renderResult.error)
        return;
    }

    if (renderResult.success){
        const { buffer } = renderResult;
        await writeFile("./customized.png", buffer);
    }
}
main();
```

Output:

<img src="assets/images/customized.png" width=200>


## Full Render Type List

| Render Types | Supported Crops | Preview |
| ------------ | --------------- | ------- |
| Default | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/default/RinckoZ_/full" width=40> |
| Marching | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/marching/RinckoZ_/full" width=40> |
| Walking | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/walking/RinckoZ_/full" width=40> |
| Crouching | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/crouching/RinckoZ_/full" width=40> |
| Crossed | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/crossed/RinckoZ_/full" width=40> |
| CrissCross| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/criss_cross/RinckoZ_/full" width=40> |
| Cheering| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/cheering/RinckoZ_/full" width=40> |
| Relaxing| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/relaxing/RinckoZ_/full" width=40> |
| Trudging | Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/trudging/RinckoZ_/full" width=40> |
| Cowering| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/cowering/RinckoZ_/full" width=40> |
| Pointing| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/pointing/RinckoZ_/full" width=40> |
| Lunging| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/lunging/RinckoZ_/full" width=40> |
| Dungeons| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/dungeons/RinckoZ_/full" width=40> |
| Facepalm| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/facepalm/RinckoZ_/full" width=40> |
| Ultimate| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/ultimate/RinckoZ_/full" width=40> |
| Isometric| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/isometric/RinckoZ_/full" width=40> |
| Head| Full | <img src="https://starlightskins.lunareclipse.studio/skin-render/head/RinckoZ_/full" width=40> |
| Bitzel| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/bitzel/RinckoZ_/full" width=40> |
| Pixel| Full, Bust, Face | <img src="https://starlightskins.lunareclipse.studio/skin-render/pixel/RinckoZ_/full" width=40> |
| Ornament| Full | <img src="https://starlightskins.lunareclipse.studio/skin-render/ornament/RinckoZ_/full" width=40> |
| Skin| Default, Processed | <img src="https://starlightskins.lunareclipse.studio/skin-render/skin/RinckoZ_/default" width=40> |