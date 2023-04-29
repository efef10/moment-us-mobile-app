import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PALLETE } from "../../../constants/colors";
import { getMediaFiles } from "../../utils/fileStream";
import { groupImagesLocally } from "./storiesService";

function Stories({ navigation }) {
    const [feedItems, setFeedItems] = useState([])
    useEffect(() => {
        // TODO - add filter pictures from camera only
        getMediaFiles(['photo'], null, null, 150).then(localImages => {
            const imagesInGroups = groupImagesLocally(localImages);
            setFeedItems(Object.entries(imagesInGroups)
                .map(([key, images]) => {
                    return {
                        key,
                        images,
                    }
                }))
            // return localImages.map(({ filename, localUri, creationTime , width, height}) => ({
            //     uri: localUri,
            //     name: filename,
            //     date: creationTime,
            //     width, 
            //     height,
            // }))
        });
    }, []);

    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={feedItems}
                renderItem={(itemData => <Text>{itemData.item.images.map(({localUri})).join(",")}</Text>)}
                keyExtractor={item => item.key}>
            </FlatList>
        </View>)

}

export default Stories;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: PALLETE.DARK_BLUE
    },
});