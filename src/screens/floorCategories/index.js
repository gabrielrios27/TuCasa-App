import { FlatList, SafeAreaView } from 'react-native';

import { COLORS } from '../../constants/themes/colors';
import { CategoryItem } from '../../components';
import { FLOORSCATEGORIES } from '../../constants/data/index';
import { styles } from './styles';

const FloorCategories = ({ navigation, route }) => {
  const onSelected = (item) => {
    navigation.navigate('ModelosPisos', { categoryId: item.id, title: item.title, color: item.color });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={FLOORSCATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.containerList} />
    </SafeAreaView>
  );
};

export default FloorCategories;
