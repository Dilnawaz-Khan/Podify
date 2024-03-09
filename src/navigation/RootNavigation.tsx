import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from '.';

function RootNavigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export {RootNavigation};
