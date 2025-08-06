import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/ProfileScreen';
import Todo from '../Screens/Todo';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Todo' screenOptions={{headerShown:false  }}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown:false}}
        />
      <Stack.Screen 
      name='Todo'
      component={Todo}
      options={{headerShown:false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};
export default MyStack;