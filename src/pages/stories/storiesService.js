export const groupImagesLocally = (localImages) => {
    const groupsReducer = localImages
        .sort((image1, image2) => image2.creationTime - image1.creationTime)
        .reduce((acc, localImage) => {
            const currentGroup = acc.groupsData[acc.currentGroupNumber]
            if (!currentGroup.length){
                currentGroup.push(localImage);
                return acc;
            }

            const lastImage = currentGroup[currentGroup.length - 1];

            //if same group:
            if(localImage.creationTime - lastImage.creationTime < 500) {
                currentGroup.push(localImage);
            } else {
                acc.currentGroupNumber++;
                acc.groupsData[acc.currentGroupNumber] = [localImage]
            }
            return acc;
        }, {currentGroupNumber: 1, groupsData: {1: []}})

    return groupsReducer.groupsData;
}