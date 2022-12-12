import { COLORS } from '../../constants/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  title: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
    color: COLORS.text,
  },
});
