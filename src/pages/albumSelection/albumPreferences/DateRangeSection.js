import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../../components/SubTitle';
import { PALLETE } from "../../../constants/colors";
import { selectDateRange } from "../../../store/slices/albumPreferences";
import DateTimePicker from "../../../components/DateTimePicker";

function DateRangeSection({ navigation }) {

    const albumPreferences = useSelector((state) => state.albumPreferences);
    const dispatch = useDispatch()

    const buttons = [
        {
            key: 'LAST_3_DAYS',
            order: 1,
            title: 'The last 3 days',
            onPress: (key) => {
                rangeSelectedHandler(key);
                navigation.navigate('pictureCountSection')
            }

        },
        {
            key: 'LAST_MONTH',
            order: 2,
            title: 'The last month',
            onPress: (key) => {
                rangeSelectedHandler(key);
                navigation.navigate('pictureCountSection')
            }

        },
        {
            key: 'LAST_YEAR',
            order: 3,
            title: 'The last year',
            onPress: (key) => {
                rangeSelectedHandler(key);
                navigation.navigate('pictureCountSection')
            }
        },
        {
            key: 'CUSTOMIZED',
            order: 4,
            title: 'customize dates',
            onPress: (key) => {
                // next()  todo
                rangeSelectedHandler(key);
                setShowDatePicker(true);
            }
        }
    ]

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDatePickerChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    function rangeSelectedHandler(key, fromDate, toDate) {
        dispatch(selectDateRange({
            dateRangeKey: key,
            fromDate,
            toDate,
        }))
    }

    function renderRangeButton(rangeButton) {
        return (
            <PrimaryButton
                key={rangeButton.key}
                onPress={rangeButton.onPress.bind(this, rangeButton.key)}
                buttonStyles={{ ...(rangeButton.key === albumPreferences.dateRangeKey && { backgroundColor: PALLETE.YELLOW }) }}>
                <Text>{rangeButton.title}</Text>
            </PrimaryButton>
        )
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <SubTitle subTitle={'I want pictures from:'} color={PALLETE.DARK_RED} />
            </View>
            <View style={styles.buttonsContainer}>
                {buttons.map(renderRangeButton)}
            </View>

            <DateTimePicker
                show={showDatePicker}
                onChange={onDatePickerChange}
                date={date} />
            {/* <Text>selected: {date.toLocaleString()}</Text> */}
        </View>)

}

export default DateRangeSection;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: PALLETE.DARK_BLUE
    },
    titleContainer: {
        marginVertical: 30,
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 50,
        marginBottom: 100,
    },

});