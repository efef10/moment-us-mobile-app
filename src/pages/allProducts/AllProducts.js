import { useState } from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { PALLETE_4 } from '../../constants/colors';
import { products } from '../../data/products';
import ProductItem from './ProductItem';

function AllProducts({ navigation }) {

    const [allProducts, setAllProducts] = useState(products)

    function albumSelectHandler() {
        navigation.navigate("albumPreferences")
    }

    function renderProduct(itemData) {
        return <ProductItem imageUrl={itemData.item.uri} title={itemData.item.title}/>
    }

    return (
        <View style={styles.productsContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>You pick your product</Text>
                <Text style={styles.titleText}>We do the <Text>hard</Text> work</Text>
            </View>
            <FlatList
                data={allProducts}
                keyExtractor={(item) => item._id}
                renderItem={renderProduct}
            />
            {/* <Button title="press" onPress={albumSelectHandler} /> */}
        </View>

    )
}

export default AllProducts;

const styles = StyleSheet.create({
    productsContainer: {
        backgroundColor: PALLETE_4.BLUE,
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        padding: 16,
    },
    titleText: {
        color: 'white',
        fontSize: 30,
    }
})