import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';

const WallCoveringCategories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revestimientos</Text>
      <View style={styles.btn}>
        <Button title="Ver Detalles" onPress={() => navigation.navigate('Detalles')} color={COLORS.primaryDark} />
      </View>
    </View>
  );
};

export default WallCoveringCategories;
