import { View, StyleSheet, Image, Text } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page2({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[1].images;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.boxWrapper}>
                    <View style={styles.box}></View>
                </View>
                <Image style={styles.image1} source={{ uri: mockData[3].uri }} />
                <View style={styles.image2Container}>
                    <Image style={styles.image2} source={{ uri: mockData[2].uri }} />
                </View>
            </View>
        </View>
    )
}

export default Page2;

const styles = StyleSheet.create({
    rootContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },
    boxWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    box: {
        width: '90%',
        height: '60%',
        backgroundColor: '#FDDC4F',
    },
    mainContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    image1: {
        position: 'absolute',
        top: 0,
        left: 20,
        width: '40%',
        height: '100%',
        objectFit: 'cover'
    },
    image2Container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    image2: {
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '50%',
    },
})