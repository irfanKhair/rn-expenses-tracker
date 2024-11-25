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
  Platform,
  FlatList,
  Pressable,
} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {

  const { width, height } = Dimensions.get('screen')

  const EXPENSES_DATA = {
    userName: 'Rowan',
    month: 'October',
    year: '2024',
    currency: 'RM',
    totalSpending: '350.00',
    expensesTrackingLists: [
      {
        id: 0,
        title: 'Sport Direct',
        expensesType: 'personal',
        currency: 'RM',
        spent: '200.00',
        txnAmount: '200.00',
        date: '28 October 2024',
        time: '3:46 PM',
        expensesDetail: {
          receiptImage: null,
          otherFeeCurrency: null,
          otherFeePrice: null,
          note: 'test note',
          splitBill: []
        }
      },
      {
        id: 1,
        title: 'Nandos',
        expensesType: 'split',
        currency: 'RM',
        spent: '150.00',
        txnAmount: '500.00',
        date: '28 October 2024',
        time: '3:46 PM',
        expensesDetail: {
          receiptImage: '',
          note: 'test note',
          splitBill: [
            {
              id: 0,
              splitBillName: 'James',
              currency: 'RM',
              price: '200.00',
            },
            {
              id: 1,
              splitBillName: 'Howard',
              currency: 'RM',
              price: '150.00',
            },
          ]
        }
      }
    ]

  }

  return (
    <View
      style={{ flex: 1, width: width, paddingHorizontal: '6%', backgroundColor: '#E4F0FA' }}>
        <View style={{height: '5%'}}/>
        <Text style={{fontSize: 28, color: '#334669', fontFamily: 'Raleway-Bold'}}>{`Hi ${EXPENSES_DATA.userName},`}</Text>
        <View style={{height: '5%'}}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 14, color: '#334669', fontFamily: 'Raleway-Regular'}}>{`You have spent a total of`}</Text>
          <Text style={{fontSize: 28, color: '#334669', fontVariant: 'lining-nums', fontFamily: 'Raleway-Bold'}}>{`${EXPENSES_DATA.currency} ${EXPENSES_DATA.totalSpending}`}</Text>
        </View>
        <View style={{height: '5%'}}/>
        <FlatList
        data={EXPENSES_DATA.expensesTrackingLists}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
            <Pressable 
              style={{width: width * 0.8, height: height * 0.07, backgroundColor: '#fff', borderRadius: 10, elevation: 5, justifyContent: 'center', flexDirection: 'row'}}
              onPress={() => navigation.navigate('Detail', {params: item})}
            >
              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: '6%', justifyContent: 'space-between'}}>
              <Text>{item.title}</Text>
              <Text>{`${item.currency} ${item.spent}`}</Text>
              </View>
            </Pressable>
            <View style={{height: '20%'}}/>
            </View>
          )
        }}
        keyExtractor={(item: any) => item.id}
      />
        <View>

        </View>
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

export default HomeScreen;
