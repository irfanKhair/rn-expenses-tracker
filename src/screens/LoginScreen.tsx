import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import RNETText from '../components/RNETText';



const LoginScreen = ({navigation}: {navigation: any}) => {

  const { width, height } = Dimensions.get('screen')
  const [email, setEmail] = useState('admin@lama.dev');
  const [password, setPassword] = useState('Test1234');
  const [secureText, setSecureText] = useState(true); 

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
      style={{ flex: 1, width: width, paddingHorizontal: '6%', alignItems: 'center', backgroundColor: '#E4F0FA' }}>
        <View style={{ height: height * 0.05 }} />
          <RNETText size={28} weight="bold">
              {`Log In`}
          </RNETText>
        <View style={{ height: height * 0.05 }} />
        <View>
          <RNETText size={14} weight="bold" style={{paddingBottom: '1%'}}>
              {`Email`}
          </RNETText>
          <TextInput
            style={{
              height: 40,
              width: width * 0.8,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              borderColor: '#EEEEEE',
              backgroundColor: '#FFFfFA',
              elevation: 5,
              fontSize: 16,
              fontFamily: 'Raleway-Regular',
              fontVariant: ['lining-nums']
            }}
            onChangeText={setEmail}
            placeholderTextColor={'#ccc'}
            placeholder='Input email'
            value={email}
          />
        </View>
        <View style={{ height: height * 0.02 }} />
      <View>
        <RNETText size={14} weight="bold" style={{paddingBottom: '1%'}}>
            {`Password`}
        </RNETText>
        <View style={{flexDirection: 'row'}}>

        <TextInput
          style={{
            height: 40,
            width: width * 0.6,
            borderWidth: 1,
            padding: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderColor: '#EEEEEE',
            backgroundColor: '#FFFfFA',
            elevation: 5,
            color: '#334669',
            fontSize: 16,
            fontFamily: 'Raleway-Regular',
            fontVariant: ['lining-nums'],
          }}
          secureTextEntry = {secureText}// {true}
          placeholder='********'
          placeholderTextColor={'#ccc'}
          onChangeText={setPassword}
          value={password}
        />
        <Pressable 
          onPressIn={() => {
            setSecureText(!secureText);
          }}
          onPressOut={() => {
            setSecureText(!secureText);
          }}
          style={{
            width: width * 0.2, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#FFFfFA', 
            elevation: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10, 
            borderColor: '#EEEEEE',
            borderWidth: 0.5,
        }}
        >
        <RNETText size={14} weight="bold">
          {secureText ? 'Show' : 'Hide'}
        </RNETText>
      </Pressable>
        </View>
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
      <RNETText size={14} weight="regular">
          {`Don't have an account? `}
          <RNETText 
            size={14} 
            weight="bold" 
            style={{
              textDecorationLine: 'underline', 
              color: 'blue'
            }} 
            onPress={() => {
              navigation.navigate('Signup')
          }}>
            {`Sign Up here!`}
          </RNETText>
      </RNETText>
      {/* <Text style={{paddingBottom: '2%'}} >Don't have an account? <Text style={{textDecorationLine: 'underline', color: 'blue'}} onPress={() => {
        navigation.navigate('Signup')
      }}>Sign Up here!</Text>
      </Text> */}
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
