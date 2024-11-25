/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'



const LoginScreen = ({navigation}: {navigation: any}) => {

  const { width, height } = Dimensions.get('screen')
  const [email, setEmail] = useState('admin@lama.dev');
  const [password, setPassword] = useState('Test1234');

  const onSubmitHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential :>>', userCredential)
        const user = userCredential.user;
        if(userCredential?.operationType && user?.accessToken) {
            // navigation.navigate('Home')
            console.log('<<: successfully logged in, navigating to Homescreen :>>')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('error :>>', error)
      });
  }


  return (
    <View
      style={{ flex: 1, width: width, paddingHorizontal: '6%', alignItems: 'center', paddingTop: '10%', backgroundColor: '#E4F0FA' }}>
        <Text style={{paddingBottom: '20%', fontSize: 20, color: '#334669'}}>Log In</Text>
      <View>
        <Text style={{paddingBottom: '2%'}}>Email</Text>
        <TextInput
          style={{
            height: 40,
            width: width * 0.84,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#EEEEEE',
            backgroundColor: '#FFFfFA',
            elevation: 5
          }}
          onChangeText={setEmail}
          placeholderTextColor={'#ccc'}
          placeholder='Input email'
          value={email}
        />
      </View>
      <View style={{paddingVertical: '4%'}}/>
      <View>
        <Text style={{paddingBottom: '2%'}}>Password</Text>
        <TextInput
          style={{
            height: 40,
            width: width * 0.84,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#EEEEEE',
            backgroundColor: '#FFFfFA',
            elevation: 5
          }}
          placeholder='********'
          placeholderTextColor={'#ccc'}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={{paddingVertical: '4%'}}/>
      <View style={{width: width * 0.6}}>
        <Button
          onPress={onSubmitHandler}
          title="Submit"
          color="#334669"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={{paddingVertical: '4%'}}/>
      <Text style={{paddingBottom: '2%'}} >Don't have an account? <Text style={{textDecorationLine: 'underline', color: 'blue'}} onPress={() => {
        navigation.navigate('Signup')
      }}>Sign Up here!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LoginScreen;
