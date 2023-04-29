import { View, StyleSheet, Image, Text } from "react-native";
import { mockData } from "../../../pages/albumSelection/step3displaySelected/displaySelectedImagesService";
import { mockResponseForImages } from "../summerTemplateHelperTemp";


function Page3({ images }) {
    const tempImages = mockResponseForImages.possibleAlbumTemplates[0].pages[1].images;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.leftContainer}>
                <Image style={styles.image1} source={{ uri: mockData[8].uri }} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightInnerContainer}>
                    <View style={styles.upperContainer}>
                        <View style={styles.image2Container}>
                            <Image style={styles.image2} source={{ uri: mockData[10].uri }} />
                        </View>
                        <View style={styles.rightUpperContainer}>
                            <Image style={styles.image3} source={{ uri: mockData[5].uri }} />
                            <View style={styles.prettyBox1}>
                                <Text style={styles.prettyBoxText}>home sweet home</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.lowerContainerInner}>
                            <Image style={styles.image4} source={{ uri: mockData[6].uri }} />
                            <Image style={styles.image5} source={{ uri: mockData[7].uri }} />
                            <Image style={styles.image6} source={{ uri: mockData[15].uri }} />

                        </View>
                        <View style={styles.lowerContainerInner}>
                            <View style={styles.prettyBox2}>
                                <Text style={styles.prettyBoxText2}>family</Text>
                            </View>
                            <Image style={styles.image7} source={{ uri: mockData[9].uri }} />
                            <Image style={styles.image8} source={{ uri: mockData[16].uri }} />
                        </View>
                    </View>

                </View>

            </View>
        </View>
    )
}

export default Page3;

const styles = StyleSheet.create({
    rootContainer: {
        height: 200,
        width: '100%',
        flexDirection: 'row',
        gap: 20,
        marginVertical: 5,
    },
    leftContainer: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '50%',
    },
    image1: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    rightContainer: {
        backgroundColor: '#FDDC4F',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
    },
    rightInnerContainer: {
        width: '90%',
        height: '90%',
        // backgroundColor: 'white',
    },
    upperContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',

        // backgroundColor: 'blue'
    },
    rightUpperContainer: {
        // width: '30%',
        flex: 1,
        // height: '100%',
        // backgroundColor: 'green',
        padding: 5,
        paddingLeft: 0,
        paddingBottom: 0,
        justifyContent: 'space-between',
    },
    image2Container: {
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // width: '70%',
        flex: 2,
        // height: '100%',
        padding: 5,
        paddingBottom: 0,
        // paddingRight: 0,
    },
    image2: {
        width: '100%',
        height: '100%',
    },
    image3: {
        right: 0,
        left: 0,
        width: '100%',
        height: '47%',
    },
    prettyBox1: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '47%',
        justifyContent: 'center',
    },
    prettyBoxText: {
        color: 'black',
        fontSize: 8,
        textAlign: 'center',
    },
    lowerContainer: {
        height: '50%',
    },
    lowerContainerInner: {
        flexDirection: 'row',
        height: '50%',
        justifyContent: 'space-between',
        padding: 5,
    },
    image4: {
        // width: '30%',
        flex: 1,
        height: '100%',
        objectFit: 'cover',
        marginRight: 5,
    },
    image5: {
        // width: '30%',
        flex: 1,
        height: '100%',
        objectFit: 'cover',
        marginRight: 5,

    },
    image6: {
        // width: '30%',
        flex: 1,
        height: '100%',
        objectFit: 'cover'
    },
    prettyBox2: {
        backgroundColor: 'black',
        // width: '30%',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        marginRight: 5,

    },
    image7: {
        // width: '30%',
        flex: 1,
        height: '100%',
        marginRight: 5,
    },
    image8: {
        // width: '30%',
        flex: 1,
        height: '100%',
    },
    prettyBoxText2: {
        color: '#FDDC4F',
        fontSize: 8,
        textAlign: 'center',
    }
})