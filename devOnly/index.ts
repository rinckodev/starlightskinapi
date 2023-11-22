import { RenderCrops, RenderTypes, fetchSkinRender } from "../src";
import { writeFile } from "node:fs/promises"

async function main(){
    const playerNickname = "RinckoZ_";
    const renderResult = await fetchSkinRender(playerNickname, {
        type: RenderTypes.Default,
        crop: RenderCrops.Full
    })

    if (!renderResult.success){
        console.log(renderResult.error)
        return;
    }

    if (renderResult.success){
        const { buffer, url } = renderResult;
        console.log(url)
        await writeFile("./render.png", buffer);
    }
}
main();