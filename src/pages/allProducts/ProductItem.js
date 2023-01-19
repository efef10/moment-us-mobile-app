import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { PALLETE } from '../../constants/colors';

function ProductItem({ title, imageUrl, onSelect, color }) {
    return (
        <Pressable
            style={styles.productItemContainer}
            android_ripple={{ color: '#ADC5E5' }}
            onPress={onSelect}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.fullSize}
                    source={{ uri: imageUrl }} />
            </View>
            <View style={[styles.titleContainer, {backgroundColor: color}]}>
                <Text style={styles.text}>{title}</Text>
            </View>

        </Pressable>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    productItemContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 1,
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
    imageContainer: {
        flex: 1,
        borderTopEndRadius: 55,
        borderTopRightRadius: 55
    },
    fullSize: {
        flex: 1,
        overflow: 'hidden',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    titleContainer: {
        backgroundColor: PALLETE.DARK_ORANGE,
        overflow: 'hidden',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5
    }
})