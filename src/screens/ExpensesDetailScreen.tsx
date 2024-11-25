import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
} from 'react-native';

const ExpensesDetailScreen = ({ navigation, route }: { navigation: any, route: any }) => {

    const { width, height } = Dimensions.get('screen')
    const paramsShared = route.params.params

    const HeaderComponent = () => {
        return (
            <Pressable
                style={{
                    position: 'absolute', left: 10, top: 10,
                    width: 100, height: 100, backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100
                }}
                onPress={() => navigation.goBack()}
            >
                <View style={{
                    width: '40%', height: '40%',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    borderRadius: 20,
                    paddingRight: 4,
                    justifyContent: 'center',
                    elevation: 5
                }}>
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/icons/chevronLeft.png')} />
                </View>
            </Pressable>
        )
    }



    return (
        <View
            style={{ flex: 1, width: width, paddingHorizontal: '6%', backgroundColor: '#E4F0FA' }}>
            {HeaderComponent()}
            <View style={{ height: '5%' }} />
            <Text style={{ fontSize: 28, color: '#334669', fontFamily: 'Raleway-Bold' }}>{``}</Text>
            <View style={{ height: '5%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 14, color: '#334669', fontFamily: 'Raleway-Regular'}}>{`For this expenses you have spent`}</Text>
                <Text style={{ fontSize: 28, color: '#334669', fontVariant: 'lining-nums', fontFamily: 'Raleway-Bold' }}>{`${paramsShared.currency} ${paramsShared.spent}`}</Text>
            </View>
            <View style={{ height: '5%' }} />

            <View style={{ alignItems: 'center' }}>
                <View
                    style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                >
                    <View style={{ width: '100%', alignItems: 'center', padding: '6%' }}>
                        <Text style={{ fontSize: 20 }}>{`${paramsShared.title}`}</Text>
                        <View style={{ height: 20 }} />
                        <Text style={{ fontSize: 12 }}>
                            <Text style={{ fontSize: 12, color: 'green', fontWeight: 'bold', textTransform: 'capitalize' }}>
                                {`${paramsShared.expensesType}`}
                            </Text>
                            <Text style={{ fontSize: 12, color: '#ccc', fontWeight: 'thin' }}>
                                {` | `}
                            </Text>
                            {`${paramsShared.date} - ${paramsShared.time}`}
                        </Text>
                    </View>
                </View>


                <View style={{ height: '7%' }} />


                <View
                    style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                >
                    <View style={{ width: '100%', alignItems: 'baseline', padding: '6%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ fontSize: 14, color: '#7c7c7c' }}>{`Transaction Amount`}</Text>
                            <Text style={{ fontSize: 14 }}>{`${paramsShared.currency} ${paramsShared.txnAmount}`}</Text>
                        </View>
                        <View style={{ height: 20 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ fontSize: 14, color: '#7c7c7c' }}>{`Other Fee`}</Text>
                            <Text style={{ fontSize: 14 }}>{`${paramsShared.otherFeePrice ? `${paramsShared.otherFeeCurrency} ${paramsShared.otherFeePrice}` : 'RM 0.00'}`}</Text>
                        </View>
                    </View>
                </View>


                <View style={{ height: '7%' }} />


                <View
                    style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                >
                    <View style={{ width: '100%', alignItems: 'baseline', padding: '6%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ fontSize: 14, color: '#7c7c7c' }}>{`Note`}</Text>
                            <Text style={{ fontSize: 14 }}>{`${paramsShared.expensesDetail.note}`}</Text>
                        </View>
                        <View style={{ height: 20 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ fontSize: 14, color: '#7c7c7c' }}>{`Receipt`}</Text>
                            {/* <Text style={{ fontSize: 14 }}>{`${paramsShared.otherFeePrice ? `${paramsShared.otherFeeCurrency} ${paramsShared.otherFeePrice}` : 'RM 0.00'}`}</Text> */}
                        </View>
                        <View style={{ height: 20 }} />

                        {paramsShared.expensesDetail.splitBill?.length > 0 && (
                            <>
                                <View style={{ height: 20 }} />
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{`Split`}</Text>
                                <View style={{ height: 20 }} />

                                    {paramsShared.expensesDetail.splitBill.map((item: any) => {
                                        return (
                                            <View key={item.id}>
                                                <View style={{ height: 20 }} />
                                                <View   style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                    <Text style={{ fontSize: 14, color: '#7c7c7c' }}>{`${item.splitBillName}`}</Text>
                                                    <Text style={{ fontSize: 14, color: '#000' }}>{`${item.currency} ${item.price}`}</Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                            </>
                        )}
                    </View>
                </View>
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

export default ExpensesDetailScreen;
