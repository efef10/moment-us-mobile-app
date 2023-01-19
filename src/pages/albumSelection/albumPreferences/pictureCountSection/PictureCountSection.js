import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../../../../components/PrimaryButton";
import { PALLETE } from "../../../../constants/colors";
import { pictureCountButtons } from './pictureCountButtons';
import { useSelector, useDispatch } from 'react-redux';
import { selectPicturesCount } from "../../../../store/slices/albumPreferences";
import { useState } from 'react';

function PictureCountSection({ navigation }) {
    const picturesCount = useSelector((state) => state.albumPreferences.picturesCount);
    const dispatch = useDispatch()

    const [customizedNumber, setCustomizedNumber] = useState('');

    function next() {
        if (picturesCount.key === 'CUSOMIZED') {
            dispatch(selectPicturesCount({
                key,
                count: customizedNumber
            }))
        }
        navigation.navigate('displaySelectedPictures')
    }

    function regularButtonHandler(key) {
        dispatch(selectPicturesCount({ key, }))
        next();
    }

    function customizedButtonHandler(key) {
        dispatch(selectPicturesCount({ key, }))
    }

    function renderCountButton(button) {
        const isRegular = button.type === 'REGULAR';
        const onPress = isRegular ?
            regularButtonHandler :
            customizedButtonHandler;

        return (
            <PrimaryButton
                key={button.key}
                onPress={onPress.bind(this, button.key)}
                buttonStyles={{ ...(button.key === picturesCount.key && { backgroundColor: PALLETE.YELLOW }) }}>
                {isRegular ? <Text>{button.title}</Text>
                    : <TextInput placeholder='pick number' />}
            </PrimaryButton>
        )
    }

    return (
        <View style={styles.rootContainer}>
            <Text>PictureCountSection</Text>
            {pictureCountButtons.map(renderCountButton)}
        </View>
    )
}

export default PictureCountSection;

const styles = StyleSheet.create({
    rootContainer: {
        paddingTop: 30,
        backgroundColor: PALLETE.DARK_BLUE,
        flex: 1,
    }
})