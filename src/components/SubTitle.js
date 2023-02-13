import { Text, View, StyleSheet } from 'react-native';

function SubTitle({ subTitle, color }) {
    return (
        <View style={styles.rootContainer}>
            <Text style={[{ color, }, styles.text]}>{subTitle}</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    rootContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})