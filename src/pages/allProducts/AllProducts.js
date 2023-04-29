import { useState } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import Page1 from '../../albumTemplates/summerTemplate/pages/Page1';
import Page2 from '../../albumTemplates/summerTemplate/pages/Page2';
import Page3 from '../../albumTemplates/summerTemplate/pages/Page3';
import Page4 from '../../albumTemplates/summerTemplate/pages/Page4';
import Page5 from '../../albumTemplates/summerTemplate/pages/Page5';
import Page6 from '../../albumTemplates/summerTemplate/pages/Page6';
import CombineImages from '../../components/CombineImages';
import { PALLETE } from '../../constants/colors';
import { products } from '../../data/products';
import ProductItem from './ProductItem';

function AllProducts({ navigation }) {

    const [allProducts, setAllProducts] = useState(products)

    function albumSelectHandler() {
        navigation.navigate("albumPreferences")
    }

    function renderProduct(itemData) {
        function productSelectHandler() {
            // navigation.navigate(productsToScreenMapper[itemData.item._id])
            navigation.navigate('albumSelection')
        }
        return <ProductItem imageUrl={itemData.item.uri} title={itemData.item.title} onSelect={productSelectHandler} color={itemData.item.color} />
    }

    return (
        <View style={styles.productsContainer}>
            {/* <ScrollView>
                <Page1></Page1>
                <Page2></Page2>
                <Page3></Page3>
                <Page4></Page4>
                <Page5></Page5>
                <Page6></Page6>
            </ScrollView> */}

            {/* <CombineImages></CombineImages>  */}
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
        backgroundColor: PALLETE.DARK_BLUE,
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