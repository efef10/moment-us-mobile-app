import React, { useRef, useState, useEffect } from "react";
import { Image, StyleSheet, Button, Text, View, ScrollView } from "react-native";
import ViewShot, { captureScreen } from "react-native-view-shot";
import { uploadTestFiles } from "../api/imagesJobs";
const CombineImages = () => {
    const [uri, setUri] = useState([]);
    const viewShotRef = useRef(null);

    const handleCapture = async () => {
        const imageUri = await ref.current.capture();
        const imageUri2 = await ref2.current.capture();
        console.log("do something with ", imageUri);
        uploadTestFiles([imageUri, imageUri2].map(image => ({
            uri: image,
            name: "name1",
            type: 'image/jpeg',
        })))
        setUri([imageUri, imageUri2]);
    };
    const ref = useRef();
    const ref2 = useRef();

    // useEffect(() => {
    //     // on mount
    //     ref.current.capture().then(uri => {
    //         console.log("do something with ", uri);
    //         setUri(uri)
    //     });
    // }, []);

    return (
        <ScrollView>
            <View>
                <ScrollView>
                    <ViewShot ref={ref} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}>
                        <Image
                            source={require("./canvas.jpg")}
                            style={styles.image1}
                        />
                        <Image
                            source={require("./collage.jpg")}
                            style={styles.image2}
                        />
                    </ViewShot>
                </ScrollView>
                <ViewShot ref={ref2} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9, width:500, height: 500 }}>
                    <Image
                        source={require("./collage.jpg")}
                        style={styles.image1}
                    />
                    <Image
                        source={require("./canvas.jpg")}
                        style={styles.image2}
                    />
                </ViewShot>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Button title="Capture" onPress={handleCapture} />
                </View>
                {uri && (
                    <ScrollView>
                        {/* <Image source={{ uri: uri[0] }} style={styles.combinedImage} /> */}
                        <Image source={{ uri: uri[0] }} style={styles.combinedImage} />
                    </ScrollView>
                )}
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'red',
    },
    test: {
        padding: 5,
        backgroundColor: 'yellow',

    },
    view: {
        borderColor: 'black',
        borderWidth: 2,
    },
    image1: {
        width: 200,
        height: 200,
        // position: "absolute",
    },
    image2: {
        width: 100,
        height: 100,
        // position: "absolute",
    },
    combinedImage: {
        width: 200,
        height: 200,
        // marginTop: 20,
    },
});

export default CombineImages;
