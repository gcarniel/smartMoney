import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Loading from './Pages/Loading';
import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Loading',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
