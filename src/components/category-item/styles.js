import { COLORS } from '../../constants/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 120,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 18,
  },
  size: {
    fontFamily: 'SourceSansPro-Italic',
    fontSize: 14,
  },
});
