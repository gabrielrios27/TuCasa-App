import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.btn}>
        <Button title="Ver Pisos" onPress={() => navigation.navigate('Pisos')} color={COLORS.primary} />
      </View>
      <View style={styles.btn}>
        <Button title="Ver Revestimientos" onPress={() => navigation.navigate('Revestimientos')} color={COLORS.secondary} />
      </View>
    </View>
  );
};

export default Home;
