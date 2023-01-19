import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PhotosTakingGuides from './src/pages/PhotosTakingGuides';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsHistory from './src/pages/ProductsHistory';
import MyAccount from './src/pages/MyAccount';
import AllProducts from './src/pages/allProducts/AllProducts';
import { PALLETE } from './src/constants/colors';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Favorites from './src/pages/Favorites';
import { AlbumSelectionNavigator } from './src/pages/albumSelection/AlbumSelectionStackNavigation';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeDrawerNavigation() {
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
        name="allProducts"
        component={AllProducts}
        options={{
          title: 'Products',
          headerStyle: {
            backgroundColor: PALLETE.BEIGE,
          },
          headerTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="productsHistory"
        component={ProductsHistory}
        options={{
          title: 'Products History',
        }}
      />
      <Drawer.Screen
        name="myAccount"
        component={MyAccount}
      />
    </Drawer.Navigator>
  )
}

function LandingPageTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeDrawerNavigation} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="guides" component={PhotosTakingGuides} />
      <Tab.Screen name="favorites" component={Favorites} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="landingPage"
              component={LandingPageTabNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="albumSelection"
              component={AlbumSelectionNavigator}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});
