import { StyleSheet } from 'react-native';

const headerBarStyles = StyleSheet.create({
  headerBarView: {
    height: 50,
    backgroundColor: 'steelblue',
  },
  headerBarTextContainer: {
    flex: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBarText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'verdana',
    fontSize: 30,
  },
  headerBarButtonContainer: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  headerBarButton: {
    color: 'white',
  },
});

export default headerBarStyles;
