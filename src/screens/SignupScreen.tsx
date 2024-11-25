/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'



const SignupScreen = ({navigation}: {navigation: any}) => {

  const { width, height } = Dimensions.get('screen')
  const [email, setEmail] = useState('irfan@gmail.com');
  const [password, setPassword] = useState('Test1234');

  const onSubmitHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('userCredential :>>', userCredential)
        if(userCredential?.operationType && user?.accessToken) {
            navigation.navigate('Home')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('error :>>', error)
        console.log('errorCode :>>', errorCode)
        if(errorCode === 'auth/email-already-in-use') {
            Alert.alert('Email already in use!', 'Proceed to login?', [
                {
                  text: 'Cancel',
                  onPress: () => navigation.navigate('Login'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => navigation.navigate('Home')},
              ]);
        } else {
            navigation.navigate('Login')
        }
      });
  }


  return (
    <View
      style={{ flex: 1, width: width, paddingHorizontal: '6%', alignItems: 'center', paddingTop: '10%', backgroundColor: '#E4F0FA' }}>
        <Text style={{paddingBottom: '20%', fontSize: 20, color: '#334669'}}>Sign Up</Text>
      <View>
        <Text style={{paddingBottom: '2%'}}>Email</Text>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: '#aaa',
            padding: 10,
            borderRadius: 8,
            width: width * 0.84
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
            borderWidth: 1,
            borderColor: '#aaa',
            padding: 10,
            borderRadius: 8,
            width: width * 0.84
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
          title="Register"
          color="#334669"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={{paddingVertical: '4%'}}/>
      <Text style={{paddingBottom: '2%'}} onPress={() => {
        navigation.goBack()
      }}>Already have an account? <Text style={{textDecorationLine: 'underline', color: 'blue'}} onPress={() => {
        navigation.goBack()
      }}>Log In here!</Text></Text>
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

export default SignupScreen;
