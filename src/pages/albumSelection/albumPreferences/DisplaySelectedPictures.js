import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { subtractFromDate } from "../../../utils/datetime";
import { getMediaFiles } from "../../../utils/fileStream";
import { useSelector } from 'react-redux';

function DisplaySelectedPictures() {
    const albumPreferences = useSelector((state) => state.albumPreferences);
    const [files, setFiles] = useState([])
    useEffect(() => {
        getMediaFiles(['photo'], albumPreferences.dateRange.fromDate, new Date()).then(extractedFiles => {
            setFiles(extractedFiles)
        })
    }, [])

    function renderFiles() {
        if (!files.length) {
            return <Text>could not find images between the dates you picked</Text>
        }
        return (
            <FlatList data={files}
                keyExtractor={(item) => item.localUri}
                renderItem={(itemData) => <Image style={styles.image} source={{ uri: itemData.item.localUri }} />}
                style={styles.rootContainer} >

            </FlatList>
        )
    }
    return (
        <View style={styles.rootContainer}>
            <Text>
                selected pictures:
            </Text>
            {renderFiles()}
        </View>
    )
}

export default DisplaySelectedPictures;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 60,
        flex: 1,
    },
    image: {
        height: 200
    }
})