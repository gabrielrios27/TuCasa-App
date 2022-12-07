import { View, Text, Button, SafeAreaView, FlatList } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/themes/colors';
import { WALLCOVERINGCATEGORIES } from '../../constants/data/index';
import { CategoryItem } from '../../components';

const WallCoveringCategories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Detalles', { categoryId: item.id, title: item.title, color: item.color });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={WALLCOVERINGCATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} style={styles.containerList} />
    </SafeAreaView>
  );
};

export default WallCoveringCategories;
