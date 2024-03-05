import { RenderCrops, RenderTypes, SkinInfoResult, fetchManySkinRenders, fetchSkinRender } from "../src";
import { writeFile } from "node:fs/promises"

async function main(){
    const playerNickname = "RinckoZ_";
    // const renderResult = await fetchSkinRender(playerNickname, {
    //     type: RenderTypes.Default,
    //     crop: RenderCrops.Full,
    // })

    const [face, bust, full, dung] = await fetchManySkinRenders("RinckoZ_",
        {
            crop: RenderCrops.Face,
            type: RenderTypes.Default,
        },
        {
            crop: RenderCrops.Bust,
            type: RenderTypes.Default,
        },
        {
            crop: RenderCrops.Full,
            type: RenderTypes.Crouching,
        },
        {
            crop: RenderCrops.Full,
            type: RenderTypes.Dungeons,
        }
    )

    // if (!renderResult.success){
    //     console.log(renderResult.error)
    //     return;
    // }

    // if (renderResult.success){
    //     const { buffer, url } = renderResult;
    //     console.log(url)
    //     await writeFile("./render.png", buffer);
    // }
}
main();