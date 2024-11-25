import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase';
import { ActivityIndicator, View } from 'react-native';
import AppStack from './src/navigation/AppStack';


const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator color={'black'} size={35}/>
  </View>
);



const App = () => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show a loading spinner while checking auth state
    return <SplashScreen />;
  }


  return (
    <NavigationContainer>
      {user ? <AppStack /> : <RootStack />}
    </NavigationContainer>
    
  );
}

export default App;
