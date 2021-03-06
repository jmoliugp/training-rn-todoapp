import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  editButton: {
    color: '#841584',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default styles;
