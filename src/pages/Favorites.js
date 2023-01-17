import { Button, FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favorites';

function Favorites() {
    const favoriteProductsIds = useSelector((state) => state.favoriteProducts.ids);
    const dispatch = useDispatch()

    return <View>
        <Text>Favorites</Text>
        <FlatList
            data={favoriteProductsIds}
            renderItem={(itemData => <Text>{itemData.item}</Text>)}
            keyExtractor={item => item} />
        <Button title='+' onPress={() => dispatch(addFavorite({id: 5}))}/>
        <Button title='-' onPress={() => dispatch(removeFavorite({id: 5}))}/>
    </View>
}

export default Favorites;