import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import {fetchBestImagesByCriteria, mockData} from './displaySelectedImagesService';

function DisplaySelectedPictures() {
    const albumPreferences = useSelector((state) => state.albumPreferences);
    const [files, setFiles] = useState([]);
    // const [filesOriginal, setFilesOriginals] = useState([]);

    useEffect(() => {
        setFiles(mockData.map(({uri}) => uri))
        // fetchBestImagesByCriteria(albumPreferences.dateRange.fromDate, new Date(), albumPreferences.picturesCount.count)
        // .then(({bestImages, filteredImages, original}) => {
        //     console.log(filteredImages)
        //     setFiles(bestImages.map(({uri}) => uri));
        //     // setFilesOriginals(original)
        // })
    }, [])

    function renderFiles() {
        if (!files.length) {
            return <Text>could not find images between the dates you picked</Text>
        }
        return (
            <FlatList data={files}
                keyExtractor={(item) => item}
                renderItem={(itemData) => <Image style={styles.image} source={{ uri: itemData.item }} />}
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

            {/* <Text>originals:</Text>
            <FlatList data={filesOriginal}
                keyExtractor={(item) => item+'efrat'}
                renderItem={(itemData) => <Image style={styles.image} source={{ uri: itemData.item }} />}
                style={styles.rootContainer} >

            </FlatList> */}
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
        height: 200,
        margin: 10
    }
})