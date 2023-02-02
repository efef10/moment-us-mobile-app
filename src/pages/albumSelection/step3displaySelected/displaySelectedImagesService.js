import { preStartAutoSelection, startAutoSelection, getBestResults } from '../../../api/imagesJobs';
import { getMediaFiles } from '../../../utils/fileStream'
function prepareLocalImages(localImages) {
    return localImages.map(({ filename, localUri, creationTime }) => ({
        uri: localUri,
        name: filename,
        date: creationTime,
    }))
}

export async function fetchBestImagesByCriteria(fromDate, toDate, count) {
    const localImages = await getMediaFiles(['photo'], fromDate, toDate);
    console.log('len', localImages.length)
    // return { bestImages: localImages.map(({localUri}) => ({uri: localUri}))}
    const userId = '1234';
    const title = 'myAlbum';
    const {
        jobId,
        nonAnalyzed,

    } = await preStartAutoSelection(userId, title, prepareLocalImages(localImages));
    console.log('jobId', jobId)

    const uriToLocalImage = localImages.reduce((acc, image) => {
        return {
            ...acc,
            [image.localUri]: image
        }
    }, {});

    const imagesForRequest = nonAnalyzed
        .sort((image1, image2) => image1.order - image2.order)
        .map(image => {
            const localImage = uriToLocalImage[image.uri];
            return {
                uri: localImage.localUri,
                name: localImage.filename,
                type: 'image/jpeg',
            }
        });

    let promises = [];
    const PAGE_SIZE = 3;
    const MAX_CONCURRENT = 3;
    let start = 0;
    let end = PAGE_SIZE;
    let pageNumber = 0;

    while (start < imagesForRequest.length){
        console.log('start', start);
        console.log('end', end);
        console.log('pageNumber', pageNumber);
        let arr = [0,1,2]
        arr.forEach(item => {
            let currentImages = imagesForRequest.slice(start, end)
            if (currentImages.length){
                promises.push(startAutoSelection(currentImages, jobId, userId, pageNumber));
            }
            start = end
            end = start + PAGE_SIZE;
            pageNumber++;
        })
        const res = await Promise.all(promises);
        promises = []
        console.log(res)
    }

    const {
        bestImages,
        filteredImages,
    } = await getBestResults(jobId, userId, 10);
    console.log(bestImages)

    return {
        bestImages,
        filteredImages,
        original: localImages.map(({localUri}) => (localUri))
    }
}


export const mockData = [
    {
        "_id": "7ccdc324-d4c7-4c5c-971a-9d495bcf7ee7",
        "blurScore": 87.126372511366,
        "date": 1673276077012,
        "name": "20230109_165437.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230109_165437.jpg",
        "userId": "1234"
    },
    {
        "_id": "c2b5f780-70bc-455f-b334-d4edcc00996b",
        "blurScore": 279.03859458244244,
        "date": 1673276102730,
        "name": "20230109_165502.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230109_165502.jpg",
        "userId": "1234"
    },
    {
        "_id": "41cb67c7-890e-4124-a820-53ebe0973deb",
        "blurScore": 697.7858723301906,
        "date": 1672819193137,
        "name": "20230104_095953.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230104_095953.jpg",
        "userId": "1234"
    },
    {
        "_id": "747402c9-a249-4b44-87d1-e072e1979223",
        "blurScore": 627.8419491108459,
        "date": 1672819194040,
        "name": "20230104_095954.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230104_095954.jpg",
        "userId": "1234"
    },
    {
        "_id": "89ce8d07-041b-4bd5-bdbf-d75ecd57e9c0",
        "blurScore": 56.391623239972525,
        "date": 1674155963699,
        "name": "20230119_211923.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230119_211923.jpg",
        "userId": "1234"
    },
    {
        "_id": "3513c649-cd26-48c0-9b0b-71bb3ad0e89c",
        "blurScore": 61.91705468342951,
        "date": 1674710635313,
        "name": "20230126_072355.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072355.jpg",
        "userId": "1234"
    },
    {
        "_id": "dc45e555-1902-4933-89fa-89582df5933a",
        "blurScore": 64.13023547948099,
        "date": 1674710652456,
        "name": "20230126_072412.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072412.jpg",
        "userId": "1234"
    },
    {
        "_id": "833855c0-327d-4ae4-87a3-f36fc3267290",
        "blurScore": 75.73669735970554,
        "date": 1674710655812,
        "name": "20230126_072415.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072415.jpg",
        "userId": "1234"
    },
    {
        "_id": "391b94b8-06cc-4335-806e-fbaef39ceb57",
        "blurScore": 73.39477909996616,
        "date": 1674710656975,
        "name": "20230126_072416.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072416.jpg",
        "userId": "1234"
    },
    {
        "_id": "27e5c7eb-1c5a-4606-a287-cb6094edc892",
        "blurScore": 79.62250311002215,
        "date": 1674710658032,
        "name": "20230126_072418.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072418.jpg",
        "userId": "1234"
    },
    {
        "_id": "23eaeac7-16dc-42e5-8219-c29c23575af9",
        "blurScore": 79.73592615940517,
        "date": 1674710660311,
        "name": "20230126_072420.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072420.jpg",
        "userId": "1234"
    },
    {
        "_id": "69abe49c-da43-45c4-9c14-98dfca7ba6a2",
        "blurScore": 68.18710632125594,
        "date": 1674827559135,
        "name": "20230127_155239.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230127_155239.jpg",
        "userId": "1234"
    },
    {
        "_id": "94436a80-539c-4ef2-9565-1d0d6fb9d6e8",
        "blurScore": 67.39622397398155,
        "date": 1674827560437,
        "name": "20230127_155240.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230127_155240.jpg",
        "userId": "1234"
    },
    {
        "_id": "5ac20a20-a806-4537-a035-3b1dbb89f042",
        "blurScore": 11.985139633586178,
        "date": 1674827563376,
        "name": "20230127_155243.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230127_155243.jpg",
        "userId": "1234"
    },
    {
        "_id": "0f8834fe-bef2-4b7e-af8c-86225f079ac8",
        "blurScore": 84.05771002150203,
        "date": 1674710661201,
        "name": "20230126_072421.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_072421.jpg",
        "userId": "1234"
    },
    {
        "_id": "2acceed4-c7fd-4053-99dc-b5b89a0a5414",
        "blurScore": 220.6864518328193,
        "date": 1674741908150,
        "name": "20230126_160508.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_160508.jpg",
        "userId": "1234"
    },
    {
        "_id": "270034f4-da71-4144-870d-c956a3d72d87",
        "blurScore": 239.69321047605538,
        "date": 1674741913471,
        "name": "20230126_160513.jpg",
        "uri": "file:///storage/emulated/0/DCIM/Camera/20230126_160513.jpg",
        "userId": "1234"
    }
]
