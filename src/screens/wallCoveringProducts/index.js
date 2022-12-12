import { FlatList } from 'react-native';
import { ProductItem } from '../../components';
import { WALLCOVERINGPRODUCTS } from '../../constants/data/index';
import { styles } from './styles';

const WallCoveringProducts = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  const filteredProducts = WALLCOVERINGPRODUCTS.filter((product) => product.categoryId === categoryId);

  const onSelected = (item) => {
    navigation.navigate('Detalles', { title: item.title, productId: item.id, type: 'wallCovering' });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  return <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.container} />;
};

export default WallCoveringProducts;
