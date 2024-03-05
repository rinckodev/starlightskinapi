import { FetchSkinRenderOptions, FetchSkinRenderResult, fetchSkinRender } from "./fetchSkinRender";

export async function fetchManySkinRenders(
    nickOrUIID: string, 
    ...options: FetchSkinRenderOptions[]
): Promise<FetchSkinRenderResult[]> {
    return await Promise.all(
        options.map(
            options => fetchSkinRender(nickOrUIID, options)
        )
    );
}