import { Button, FlatList, Text, View, PermissionsAndroid, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slices/favorites';
import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';

function Favorites() {
    const [imageUri, setImageUri] = useState("")
    const _mediaLibraryAsync = async () => {
        let { status } = await MediaLibrary.requestPermissionsAsync()
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: ['photo'], // 'video'
            createdAfter: 1672577279000,
            album: "-1739773001",
        })
        let photo = await MediaLibrary.getAssetInfoAsync(media.assets[0])
        setImageUri(photo.localUri) // photo.uri
        console.log(video);
    };

    const favoriteProductsIds = useSelector((state) => state.favoriteProducts.ids);
    const dispatch = useDispatch()
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return <View>
        <Text>Favorites</Text>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <FlatList
            data={favoriteProductsIds}
            renderItem={(itemData => <Text>{itemData.item}</Text>)}
            keyExtractor={item => item} />
        <Button title='+' onPress={() => dispatch(addFavorite({ id: 5 }))} />
        <Button title='-' onPress={() => dispatch(removeFavorite({ id: 5 }))} />
        <Button title={'request'} onPress={_mediaLibraryAsync} />
    </View>
}

export default Favorites;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    }
})