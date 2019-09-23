import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeNavigator from './WelcomeNavigator';
import HomeNavigator from './HomeNavigator';
import routes from './helpers/routes';

const AppNavigator = createStackNavigator(
  {
    [routes.root.Welcome]: {
      screen: WelcomeNavigator,
    },
    [routes.root.Home]: {
      screen: HomeNavigator,
    },
  },
  {
    initialRouteName: routes.root.Welcome,
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
