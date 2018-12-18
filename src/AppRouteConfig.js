import { createStackNavigator } from 'react-navigation';
import Splash from './screens/Splash';

const AppRouteConfig = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { gesturesEnabled: false } },
},
    {
        headerMode: 'none'
    })
export default AppRouteConfig;

