import { FlatList, SafeAreaView } from 'react-native';

import { CategoryItem } from '../../components';
import { WALLCOVERINGCATEGORIES } from '../../constants/data/index';
import { styles } from './styles';

const WallCoveringCategories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('ModelosRevestimientos', { categoryId: item.id, title: item.title, color: item.color });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={WALLCOVERINGCATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.containerList} />
    </SafeAreaView>
  );
};

export default WallCoveringCategories;
