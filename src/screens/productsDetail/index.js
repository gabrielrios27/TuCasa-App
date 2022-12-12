import { FLOORSPRODUCTS, WALLCOVERINGPRODUCTS } from '../../constants/data/index';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';

const ProductsDetail = ({ navigation, route }) => {
  const { type } = route.params;
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.floorProducts.selected);

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
