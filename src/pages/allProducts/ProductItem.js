import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

function ProductItem({ title, imageUrl }) {
    return (
        <Pressable style={styles.productItemContainer} android_ripple={{ color: '#ADC5E5' }}>
            <View style={styles.fullSize}>
                <Image style={styles.fullSize} source={{uri: imageUrl}}/>
            </View>
            <Text style={styles.text}>{title}</Text>

        </Pressable>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    productItemContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 5,
        height: 150,
        borderColor: 'black',
        // borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        elevation: 2,
        overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
    },
    fullSize: {
        flex: 1,
    }
})