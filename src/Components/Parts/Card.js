import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import {useSelector} from 'react-redux';

 function Card({navigation}) {

const {transactions} = useSelector((state) => state.transactions);

const prices = transactions.map((transaction) => transaction.price);
const totalPrice = prices.reduce((prev,cur) => (prev += cur), 0);


const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0)
      .toFixed(2) * -1;


    return (
        <LinearGradient 
        colors={['#FAAD3D','#EFC90A','#F1CB0C']} 
        style ={{...styles.Box}} >
    <View style={{width:'70%', alignItems: 'flex-start'}}>
        <Text style ={{fontSize:40, 
            color:'#fff', 
            fontFamily:'Loto-Regular', 
            fontWeight: '600',
            }}>Bütçe
            </Text>

         <Text style ={{fontSize:30, 
            color:'#fff', 
            fontFamily:'Loto-Medium', 
            fontWeight: '700',
            }}>₺{totalPrice}
        </Text>
     </View>

    <View //Button viewi 
        style={{
          alignItems: 'flex-end',
          width: '30%',
        }}>
           
        <View style={{flex: 1}}>
         <Button 
         rounded
            light
            style={{
            padding:15,
            marginTop: 15,
            borderWidth:5,
            borderColor: '#fff',
            backgroundColor: '#E10C62',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        
        onPress = {() => {
            navigation.navigate('Add');
        }}>
       
        <Text style={{color: '#fff', fontWeight: '700',fontSize: 15}}>
                Ekle
        </Text>
        </Button>
        <Text
            style={{
              marginTop: 35,
              color: '#fff',
              fontSize: 15,
              fontWeight: '700',
            }}>
              Masraflar
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
            }}>
            ₺{expense}
          </Text>
        </View>
    </View>            
    </LinearGradient>
    );
}
const styles = StyleSheet.create({
    Box: {
        width: '100%',
        height: 189,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
    },
});

export default Card;