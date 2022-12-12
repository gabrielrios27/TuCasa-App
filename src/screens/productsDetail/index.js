import { FLOORSPRODUCTS, WALLCOVERINGPRODUCTS } from '../../constants/data/index';
import { Text, View } from 'react-native';

import { styles } from './styles';

const ProductsDetail = ({ navigation, route }) => {
  const { productId, type } = route.params;

  const filteredProducts =
    type === 'floor' ? FLOORSPRODUCTS.find((prod) => prod.id === productId) : WALLCOVERINGPRODUCTS.find((prod) => prod.id === productId);

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
