import { COLORS } from '../../constants/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    minHeight: '100%',
  },
  title: {
    fontFamily: 'SourceSansPro-Black',
  },
  containerList: {
    width: '100%',
  },
});
