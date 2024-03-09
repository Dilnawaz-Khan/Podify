import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Upload = () => {
  return (
    <View style={styles.container}>
      <Text>Upload</Text>
    </View>
  );
};

export {Upload};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    gap: 20,
  },
});
