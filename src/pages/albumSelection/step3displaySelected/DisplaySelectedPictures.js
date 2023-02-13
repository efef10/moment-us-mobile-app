import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import GeneralTemplate from "../../../albumTemplates/generalTemplate/GeneralTemplate";
import PrimaryButton from "../../../components/PrimaryButton";
import SubTitle from "../../../components/SubTitle";
import { PALLETE } from "../../../constants/colors";
import { fetchBestImagesByCriteria, mockData } from './displaySelectedImagesService';

function DisplaySelectedPictures() {
    const albumPreferences = useSelector((state) => state.albumPreferences);
    const [files, setFiles] = useState([]);
    const [showLaoder, setShowLoader] = useState(true);
    // const [filesOriginal, setFilesOriginals] = useState([]);

    useEffect(() => {
        setFiles(mockData.map(({ uri }) => uri))
        // fetchBestImagesByCriteria(albumPreferences.dateRange.fromDate, new Date(), albumPreferences.picturesCount.count)
        // .then(({bestImages, filteredImages, original}) => {
        //     console.log(filteredImages)
        //     setFiles(bestImages.map(({uri}) => uri));
        //     // setFilesOriginals(original)
        // })
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
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
        <ScrollView style={styles.rootContainer}>
            {showLaoder ? <ActivityIndicator style={styles.loader} animating={showLaoder}></ActivityIndicator> :
                <>
                    <Text style={styles.title}>
                        your fascinating album is ready!
                    </Text>
                    {/* <View>
                <Image source={require('./firstBackground.jpg')} style={styles.image1}></Image>
                <Image source={{uri: files[5]}} style={styles.image2}/>
                <Image source={{uri: files[10]}} style={styles.image3}/>
                <Image source={{uri: files[11]}} style={styles.image4}/>
                <Image source={{uri: files[2]}} style={styles.image5}/>

            </View> */}
                    <GeneralTemplate></GeneralTemplate>
                    <PrimaryButton>Buy me Now</PrimaryButton></>
            }


            {/* {renderFiles()} */}

            {/* <Text>originals:</Text>
            <FlatList data={filesOriginal}
                keyExtractor={(item) => item+'efrat'}
                renderItem={(itemData) => <Image style={styles.image} source={{ uri: itemData.item }} />}
                style={styles.rootContainer} >

            </FlatList> */}
        </ScrollView>
    )
}

export default DisplaySelectedPictures;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        // padding: 10,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    loader:{
        marginTop: 40
    },
    rootContainer: {
        marginTop: 60,
        flex: 1,
        backgroundColor: PALLETE.DARK_BLUE,
    },
    image: {
        height: 200,
        margin: 10
    },
    image2: {
        width: 80,
        height: 100,
        position: "absolute",
        top: 20,
        right: 36,
        transform: [{ rotate: '-10deg' }],
    },
    image3: {
        width: 30,
        height: 60,
        position: "absolute",
        top: 20,
        left: 36,
    },
    image4: {
        width: 50,
        height: 80,
        position: "absolute",
        top: 20,
        left: 70,
    },
    image5: {
        width: 60,
        height: 40,
        position: "absolute",
        top: 83,
        left: 6,
    },
    image1: {
        width: '100%',
        height: 150,
        position: "absolute",
    },
})