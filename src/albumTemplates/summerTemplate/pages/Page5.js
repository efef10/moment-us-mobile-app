import { View, StyleSheet, Image, Text } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page5({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[1].images;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.leftContainer}>
                <Image style={styles.image1} source={{ uri: mockData[8].uri }} />
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.image2} source={{ uri: mockData[8].uri }} />
                <Image style={styles.image3} source={{ uri: mockData[8].uri }} />
                <Image style={styles.image4} source={{ uri: mockData[8].uri }} />
                <Image style={styles.image5} source={{ uri: mockData[8].uri }} />
            </View>

        </View>
    )
}

export default Page5;

const styles = StyleSheet.create({
    rootContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    leftContainer: {
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '100%',
    },
    rightContainer: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    image1: {
        width: '100%',
        height: '100%',
    },
    image2: {
        width: '50%',
        height: '50%',
    },
    image3: {
        width: '50%',
        height: '50%',
    },
    image4: {
        width: '50%',
        height: '50%',
    },
    image5: {
        width: '50%',
        height: '50%',
    },
})