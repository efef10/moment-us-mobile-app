import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PALLETE } from '../constants/colors';

function PrimaryButton({ children, onPress, buttonStyles }) {
  // const [pressed, setPresses] = useState(false)
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer, buttonStyles]
        }
        onPress={onPress}
        android_ripple={{ color: PALLETE.YELLOW,}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: PALLETE.BEIGE,
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: PALLETE.BLACK,
    textAlign: 'center',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
    // backgroundColor: PALLETE.YELLOW,
  },
});
