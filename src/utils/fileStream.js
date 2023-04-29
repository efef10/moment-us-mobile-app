import * as MediaLibrary from 'expo-media-library';


export async function getMediaFiles(mediaTypes, fromDate, toDate, maxResults) {
    try {
        

        let { status } = await MediaLibrary.requestPermissionsAsync()

        let media = await MediaLibrary.getAssetsAsync({
            mediaType: mediaTypes,
            // after: '36',
            first: maxResults || 36,
            ...(fromDate && { createdAfter: new Date(fromDate).getTime() }),
            
        })

        return await Promise.all(media.assets.map(async (asset) => {
            return await MediaLibrary.getAssetInfoAsync(asset.id)
        }))
    }
    catch (err) {
        console.log("unexpected error:", err)
        return [];
    }
}
