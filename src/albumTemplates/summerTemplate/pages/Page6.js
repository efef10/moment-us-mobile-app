import { View, StyleSheet, Image } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page6({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[0].images;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.rightContainer}>
            </View>
            <View style={styles.leftContainer}>
                <Image style={styles.image1} source={{ uri: mockData[12].uri }} />
            </View>
        </View>
    )
}

export default Page6;

const styles = StyleSheet.create({
    rootContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },
    leftContainer: {
        backgroundColor: '#FDDC4F',
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        height: '100%',
        width: '50%',
    },
    rightContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
    },
    image1: {
        width: '60%',
        height: '95%',
        left: 10,
        objectFit: 'cover'
    },

})