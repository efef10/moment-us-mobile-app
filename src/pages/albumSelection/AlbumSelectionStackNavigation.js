import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PALLETE } from '../../constants/colors';
import DateRangeSection from './albumPreferences/DateRangeSection';
import DisplaySelectedPictures from './albumPreferences/DisplaySelectedPictures';
import PictureCountSection from './albumPreferences/pictureCountSection/PictureCountSection';

export function AlbumSelectionNavigator() {
    const Stack = createNativeStackNavigator();

    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            backgroundColor: PALLETE.DARK_BLUE,
        }}
    >
        <Stack.Screen
            name="albumPreferences"
            component={DateRangeSection}
        />
        <Stack.Screen
            name="pictureCountSection"
            component={PictureCountSection}
        />
        <Stack.Screen
            name="displaySelectedPictures"
            component={DisplaySelectedPictures}
        />
    </Stack.Navigator>)
}