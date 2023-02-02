import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PALLETE } from '../../constants/colors';
import DateRangeSection from './step1dateRangeSection/DateRangeSection';
import DisplaySelectedPictures from './step3displaySelected/DisplaySelectedPictures';
import PictureCountSection from './step2pictureCountSection/PictureCountSection';

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