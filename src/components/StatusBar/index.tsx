import {
  StatusBar as AppStatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import {COLORS} from '../../constants';

const StatusBar = () => (
  <View style={[styles.statusBar, {backgroundColor: COLORS.bgColor}]}>
    <SafeAreaView>
      <AppStatusBar
        translucent
        backgroundColor={COLORS.bgColor}
        barStyle={'light-content'}
      />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = AppStatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default StatusBar;
