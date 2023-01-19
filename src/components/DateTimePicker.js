import { View } from "react-native";
import * as DateTimePickerNative from '@react-native-community/datetimepicker';

function DateTimePicker({ show, onChange, date }) {
    return (
        <View>
            {show && (
                <DateTimePickerNative
                    testID="dateTimePicker"
                    value={date}
                    onChange={onChange}
                    style={{ backgroundColor: 'red' }}
                />
            )}
        </View>
    )

}

export default DateTimePicker;