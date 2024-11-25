import React from 'react';
import {
  Dimensions,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import RNETText from '../components/RNETText';

const HomeScreen = ({ navigation }: { navigation: any }) => {

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
      },
      // {
      //   id: 10,
      //   title: 'Petronas',
      //   expensesType: 'personal',
      //   currency: 'RM',
      //   spent: '200.00',
      //   txnAmount: '200.00',
      //   date: '28 October 2024',
      //   time: '3:46 PM',
      //   expensesDetail: {
      //     receiptImage: null,
      //     otherFeeCurrency: null,
      //     otherFeePrice: null,
      //     note: 'test note',
      //     splitBill: []
      //   }
      // },
      // {
      //   id: 11,
      //   title: 'Sport Direct',
      //   expensesType: 'personal',
      //   currency: 'RM',
      //   spent: '200.00',
      //   txnAmount: '200.00',
      //   date: '28 October 2024',
      //   time: '3:46 PM',
      //   expensesDetail: {
      //     receiptImage: null,
      //     otherFeeCurrency: null,
      //     otherFeePrice: null,
      //     note: 'test note',
      //     splitBill: []
      //   }
      // },
      // {
      //   id: 12,
      //   title: 'Sport Direct',
      //   expensesType: 'personal',
      //   currency: 'RM',
      //   spent: '200.00',
      //   txnAmount: '200.00',
      //   date: '28 October 2024',
      //   time: '3:46 PM',
      //   expensesDetail: {
      //     receiptImage: null,
      //     otherFeeCurrency: null,
      //     otherFeePrice: null,
      //     note: 'test note',
      //     splitBill: []
      //   }
      // },
    ]

  }

  return (
    <View
      style={{ flex: 1, width: width, paddingHorizontal: '6%', backgroundColor: '#E4F0FA' }}>
      <View style={{ height: height * 0.05 }} />
      <RNETText size={28} weight="bold">{`Hi ${EXPENSES_DATA.userName},`}</RNETText>
      <View style={{ height: height * 0.05 }} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <RNETText size={14} weight="regular">{`You have spent a total of`}</RNETText>
        <RNETText size={28} weight="bold">{`${EXPENSES_DATA.currency} ${EXPENSES_DATA.totalSpending}`}</RNETText>
      </View>
      <View style={{ height: height * 0.05 }} />
      <FlatList
        data={EXPENSES_DATA.expensesTrackingLists}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <Pressable
                style={{ width: width * 0.8, height: height * 0.07, backgroundColor: '#fff', borderRadius: 10, elevation: 5, justifyContent: 'center', flexDirection: 'row' }}
                onPress={() => navigation.navigate('Detail', { params: item })}
              >
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: '6%', justifyContent: 'space-between' }}>
                  <RNETText size={14} weight="regular">{item.title}</RNETText>
                  <RNETText size={14} weight="bold">{`${item.currency} ${item.spent}`}</RNETText>
                </View>
              </Pressable>
              <View style={{ height: height * 0.02 }} />
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

export default HomeScreen;
