import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
} from 'react-native';
import RNETText from '../components/RNETText';

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
        <View style={{ flex: 1, backgroundColor: '#E4F0FA' }}>
            {HeaderComponent()}
            <ScrollView
                style={{ flex: 1, width: width, paddingHorizontal: '6%', backgroundColor: '#E4F0FA' }}>
                <View style={{ height: height * 0.05 }} />
                    <RNETText size={28} weight="bold" style={{color: 'transparent'}}>{``}</RNETText>
                <View style={{ height: height * 0.05 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <RNETText size={14} weight="regular">
                        {`For this expenses you have spent`}
                    </RNETText>
                    <RNETText size={28} weight="bold">
                        {`${paramsShared.currency} ${paramsShared.spent}`}
                    </RNETText>
                </View>
                <View style={{ height: height * 0.05 }} />

                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                    >
                        <View style={{ width: '100%', alignItems: 'center', padding: '6%' }}>
                            <RNETText size={20} weight="bold">
                                {`${paramsShared.title}`}
                            </RNETText>
                            <View style={{ height: 20 }} />
                            <RNETText size={12} weight="regular">
                                <RNETText size={12} weight="bold" style={{color: 'green', textTransform: 'capitalize' }}>
                                    {`${paramsShared.expensesType}`}
                                </RNETText>
                                <RNETText size={12} weight="regular" style={{textTransform: 'capitalize' }}>
                                    {`\t\t|\t\t`}
                                </RNETText>
                                {`${paramsShared.date} - ${paramsShared.time}`}
                            </RNETText>
                        </View>
                    </View>


                    <View style={{ height: height * 0.05 }} />


                    <View
                        style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                    >
                        <View style={{ width: '100%', alignItems: 'baseline', padding: '6%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <RNETText size={14} weight="regular" style={{textTransform: 'capitalize' }}>
                                    {`Transaction Amount`}
                                </RNETText>
                                <RNETText size={14} weight="bold">
                                    {`${paramsShared.currency} ${paramsShared.txnAmount}`}
                                </RNETText>
                            </View>
                            <View style={{ height: 20 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <RNETText size={14} weight="regular" style={{textTransform: 'capitalize' }}>
                                    {`Other Fee`}
                                </RNETText>
                                <RNETText size={14} weight="bold">
                                    {`${paramsShared.otherFeePrice ? `${paramsShared.otherFeeCurrency} ${paramsShared.otherFeePrice}` : 'RM 0.00'}`}
                                </RNETText>
                            </View>
                        </View>
                    </View>


                    <View style={{ height: height * 0.05 }} />


                    <View
                        style={{ width: width * 0.8, height: 'auto', backgroundColor: '#fff', borderRadius: 10, elevation: 3, justifyContent: 'center', flexDirection: 'row' }}
                    >
                        <View style={{ width: '100%', alignItems: 'baseline', padding: '6%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <RNETText size={14} weight="regular" style={{textTransform: 'capitalize' }}>
                                    {`Note`}
                                </RNETText>
                                <RNETText size={14} weight="bold">
                                    {`${paramsShared.expensesDetail.note}`}
                                </RNETText>
                            </View>
                            <View style={{ height: 20 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <RNETText size={14} weight="regular" style={{textTransform: 'capitalize' }}>
                                    {`Receipt`}
                                </RNETText>
                                <RNETText size={14} weight="bold">
                                    {``}
                                </RNETText>
                            </View>
                            <View style={{ height: 20 }} />

                            {paramsShared.expensesDetail.splitBill?.length > 0 && (
                                <>
                                    <View style={{ height: 20 }} />
                                    <RNETText size={20} weight="bold">
                                        {`Split`}
                                    </RNETText>

                                        {paramsShared.expensesDetail.splitBill.map((item: any) => {
                                            return (
                                                <View key={item.id}>
                                                    <View style={{ height: 20 }} />
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                        <RNETText size={14} weight="regular" style={{textTransform: 'capitalize' }}>
                                                            {`${item.splitBillName}`}
                                                        </RNETText>
                                                        <RNETText size={14} weight="bold">
                                                            {`${item.currency} ${item.price}`}
                                                        </RNETText>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
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
