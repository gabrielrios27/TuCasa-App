import { COLORS } from '../../constants/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 160,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  containerTitle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.backgroundTransparent,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
    color: COLORS.white,
  },
});
