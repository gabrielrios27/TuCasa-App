import { View, Text } from 'react-native';
import { styles } from './styles';
import { FLOORSPRODUCTS } from '../../constants/data/index';

const ProductsDetail = ({ navigation, route }) => {
  const { productId } = route.params;

  const filteredProducts = FLOORSPRODUCTS.find((prod) => prod.id === productId);
  console.warn(productId);
  const { title, price, description, size } = filteredProducts || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>{size}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductsDetail;
