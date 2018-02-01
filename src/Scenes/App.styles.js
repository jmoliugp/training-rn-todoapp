import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  headerBar: {
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default appStyles;
