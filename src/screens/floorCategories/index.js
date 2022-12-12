import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CategoryItem } from '../../components';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';

const FloorCategories = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.floorCategory.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('ModelosPisos', { title: item.title });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.containerList} />
    </SafeAreaView>
  );
};

export default FloorCategories;
