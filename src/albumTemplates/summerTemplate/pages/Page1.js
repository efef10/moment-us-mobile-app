import { View, StyleSheet, Image } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page1({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[0].images;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.leftContainer}>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.image1} source={{ uri: mockData[13].uri }} />
                <View style={styles.imagesFrameContainer}>
                    <View style={styles.imagesFrame}>
                        <Image style={styles.image2} source={{ uri: mockData[12].uri }} />
                        <Image style={styles.image3} source={{ uri: mockData[11].uri }} />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Page1;

const styles = StyleSheet.create({
    rootContainer: {
        // backgroundColor: 'green',
        height: 200,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },
    leftContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '50%',
    },
    rightContainer: {
        backgroundColor: '#FDDC4F',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
    },
    image1: {
        position: 'absolute',
        top: 0,
        width: '50%',
        height: '100%',
        right: 0,
        objectFit: 'cover'
    },
    imagesFrameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'

    },
    imagesFrame: {
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#D9D9D9',
    },
    image2: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '50%',
        objectFit: 'cover'
    },
    image3: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        objectFit: 'cover'
    }
})