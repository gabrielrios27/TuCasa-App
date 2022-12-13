import { filterProducts, selectProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import { ProductItem } from '../../components';
import { styles } from './styles';
import { useEffect } from 'react';

const WallCoveringProducts = ({ navigation, route }) => {
  const category = useSelector((state) => state.wallCoveringCategories.selected);
  const filteredProducts = useSelector((state) => state.wallCoveringProducts.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Detalles', { title: item.title, type: 'wallCovering' });
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  return <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.container} />;
};

export default WallCoveringProducts;
