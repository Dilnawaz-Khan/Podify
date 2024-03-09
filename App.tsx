import {SafeAreaView, StyleSheet, View} from 'react-native';
import {RootNavigation} from './src/navigation';
import {COLORS} from './src/constants';
import StatusBar from './src/components/StatusBar';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
