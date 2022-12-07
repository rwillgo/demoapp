import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacer: {
    height: 15,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  topSpacer: {
    height: 10,
  },
  flatList: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
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
  emptyView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
