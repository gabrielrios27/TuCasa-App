import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';

const FloorCategories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pisos</Text>
      <View style={styles.btn}>
        <Button title="Ver Detalles" onPress={() => navigation.navigate('Detalles')} color={COLORS.primaryDark} />
      </View>
    </View>
  );
};

export default FloorCategories;
