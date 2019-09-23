import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Dashboard from '~/containers/Dashboard';
import Send from '~/containers/Send';
import Receive from '~/containers/Receive';
import Settings from '~/containers/Settings';
import ShowWallet from '~/containers/ShowWallet';
import Drawer from '~/components/Drawer';
import routes from './helpers/routes';
import transitionConfig from './transition';

const DashboardNavigator = createStackNavigator(
  {
    [routes.Home.Dashboard]: {
      screen: Dashboard,
    },
    [routes.Home.Send]: {
      screen: Send,
    },
    [routes.Home.Receive]: {
      screen: Receive,
    },
    [routes.Home.Settings]: {
      screen: Settings,
    },
    [routes.Home.ShowWallet]: {
      screen: ShowWallet,
    },
  },
  {
    initialRouteName: routes.Home.Dashboard,
    headerMode: 'none',
    transitionConfig,
  },
);

export default createDrawerNavigator({
  dashboard: {
    screen: DashboardNavigator,
  },
}, {
  contentComponent: Drawer,
});
