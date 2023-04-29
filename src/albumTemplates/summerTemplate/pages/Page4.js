import { View, StyleSheet, Image, Text } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page4({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[1].images;
    return (
        <View style={styles.rootContainer}>
            <Image style={styles.image1} source={{ uri: mockData[16].uri }} />
            <Image style={styles.image2} source={{ uri: mockData[8].uri }} />
            <Image style={styles.image3} source={{ uri: mockData[8].uri }} />
            <Image style={styles.image4} source={{ uri: mockData[8].uri }} />
        </View>
    )
}

export default Page4;

const styles = StyleSheet.create({
    rootContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    image1: {
        width: '24%',
        height: '100%',
    },
    image2: {
        width: '24%',
        height: '100%',
    },
    image3: {
        width: '24%',
        height: '100%',
    },
    image4: {
        width: '24%',
        height: '100%',
    },
})