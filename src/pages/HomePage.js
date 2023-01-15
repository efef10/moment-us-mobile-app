import { Text, View, Button } from 'react-native';

function HomePage({ navigation }) {
    function albumSelectHandler() {
        navigation.navigate("albumPreferences")
    }
    return (
        <View>
            <Text>home page</Text>
            <Button title="press" onPress={albumSelectHandler} />
        </View>

    )
}

export default HomePage;