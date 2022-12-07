import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

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
    padding: 10,
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: COLORS.white,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 18,
    color: COLORS.white,
  },
  weight: {
    fontFamily: 'SourceSansPro-Italic',
    fontSize: 14,
    color: COLORS.white,
  },
});
