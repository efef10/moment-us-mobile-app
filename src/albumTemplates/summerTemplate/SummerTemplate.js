import { Image, View, StyleSheet, ScrollView } from 'react-native';


function GeneralTemplate({ images, groups }) {



    return(
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./assets/1.png')} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./assets/2.png')} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./assets/3.png')} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./assets/4.png')} />
            </View>
        </View>
    );
}

export default GeneralTemplate;

const styles = StyleSheet.create({
    image: {
        width: 355,
        height: 220,
    },
    imageContainer: {
        width: '98%',
        height: 220,
        // padding: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 5,
        elevation: 2,
    }
})