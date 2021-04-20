import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home'
import DetailsScreen from './screens/details'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default RootNavigator;