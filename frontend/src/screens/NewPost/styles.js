import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacer: {
    height: 15,
  },
  buttonsView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 17,
    color: 'blue',
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    //
  },
  inputView: {
    //
  },
  textLabel: {
    //
  },
  textInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  submitView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontWeight: '400',
  },
});

export default styles;
