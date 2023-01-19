import * as MediaLibrary from 'expo-media-library';

// const _mediaLibraryAsync = async () => {
//     let { status } = await MediaLibrary.requestPermissionsAsync()
//     let media = await MediaLibrary.getAssetsAsync({
//         mediaType: ['photo'], // 'video'
//         createdAfter: 1672577279000,
//         album: "-1739773001",
//     })
//     let photo = await MediaLibrary.getAssetInfoAsync(media.assets[0])
//     setImageUri(photo.localUri) // photo.uri
// };


export async function getMediaFiles(mediaTypes, fromDate, toDate) {
    console.log(fromDate)
    try{
        let { status } = await MediaLibrary.requestPermissionsAsync()
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: mediaTypes,
            ...(fromDate && {createdAfter: new Date(fromDate).getTime()}),
            first: 40,  //pageSize
            after: '20' //
            // ...(toDate && {createdBefore: toDate}),
            // album: "-1739773001",
        })
        return await Promise.all(media.assets.map(async (asset) => {
            return await MediaLibrary.getAssetInfoAsync(asset)
        }))
    }
    catch(err){
        console.log("unexpected error:", err)
        return [];
    }
}

// const pageSize = 20;
// let firstPage = ...; // same as above
// let lastItemID = firstPage.endCursor; // for iOS

// let n = 2; // page number, starting from 1
// let nthPage = await getAssetsAsync({
//   first: pageSize,
//   after: Platform.OS === 'android' ? `${(n-1)*pageSize}` : lastItemID 
// });
// lastItemID = nthPage.endCursor;