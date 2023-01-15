import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AlbumSelection from './src/pages/AlbumSelection';
import HomePage from './src/pages/HomePage';
import PhotosTakingGuides from './src/pages/PhotosTakingGuides';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsHistory from './src/pages/ProductsHistory';
import MyAccount from './src/pages/MyAccount';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigation(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="ProductsHistory"
        component={HomePage}
        options={{
          title: 'Home',
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="list" color={color} size={size} />
          // ),
        }}
      />
      <Drawer.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="star" color={color} size={size} />
          // ),
        }}
      />
    </Drawer.Navigator>
  )
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={DrawerNavigation} options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="guides" component={PhotosTakingGuides} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <>
    <StatusBar/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="albumPreferences" component={AlbumSelection} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
