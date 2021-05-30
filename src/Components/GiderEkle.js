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
/*
<View style={{ 
  paddingHorizontal: SIZES.padding, 
  paddingVertical:  SIZES.padding, 
  backgroundColor: '#a83baa',
  flex: 1,
  flexDirection: 'row',
  margin: 5,
  //borderRadius: 5,*/