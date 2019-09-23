import { createStackNavigator } from 'react-navigation';

import CreateWallet from '~/containers/CreateWallet';
import routes from './helpers/routes';
import transitionConfig from './transition';

export default createStackNavigator(
  {
    [routes.Welcome.CreateWallet]: {
      screen: CreateWallet,
    },
  },
  {
    initialRouteName: routes.Welcome.CreateWallet,
    headerMode: 'none',
    transitionConfig,
  },
);
