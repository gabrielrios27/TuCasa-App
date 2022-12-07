import { Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.4}
        underlayColor="#DDDDDD"
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default CategoryItem;
