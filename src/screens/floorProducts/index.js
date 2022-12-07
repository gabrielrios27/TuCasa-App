import { FlatList } from 'react-native';

import { FLOORSPRODUCTS } from '../../constants/data/index';
import { ProductItem } from '../../components';

import { styles } from './styles';

const FloorProducts = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  const filteredProducts = FLOORSPRODUCTS.filter((product) => product.categoryId === categoryId);

  const onSelected = (item) => {
    navigation.navigate('Detalles', { title: item.title, productId: item.id });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  return <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.container} />;
};

export default FloorProducts;
