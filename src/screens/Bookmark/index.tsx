import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants';

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark</Text>
    </View>
  );
};

export {Bookmark};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
});
