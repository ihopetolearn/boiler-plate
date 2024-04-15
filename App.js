import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './components/searchbar';


const navigator = createStackNavigator(
  {
    Search1: SearchScreen,
    Search2: SearchBar // Correct the key to match the initialRouteName
  },
  {
    initialRouteName: 'Search2', // Correct the initial route name to match the key
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);