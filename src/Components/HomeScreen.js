import React from'react';
import {View, Text, FlatList} from 'react-native';
import {Button, Container, CheckBox, Body, Right,ListItem} from 'native-base';

import Animated from 'react-native-reanimated';


import Card from './Parts/Card';
import Empty from './Parts/Empty';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../store/actions/transactionAction';
 
function Item({title,id, price}){
      const dispatch = useDispatch();

      return(
          <View style = {{
              marginVertical:3,
              paddingHorizontal: 30,
              paddingVertical:15,
              }}>
                  <ListItem>
                      <CheckBox  
                      onPress={() => {
                            dispatch(deleteTransaction(id));
                      }}
                      color='#ff4500'
                      checked = {true}
                      />

                      <Body>
                          <Text style = {{fontSize:17, fontWeight: '700',marginLeft: 10}}>
                              {title}
                          </Text>
                      </Body>

                        <Right>
                            <Text style = {{fontSize:14, 
                                fontFamily: 'Loto-Bold',
                                fontWeight: '500',
                                marginLeft: 10 , 
                                color: price > 0 ? '#009BFC' : '#FF4500',
                                }}>
                                {price > 0 ? `+${price}₺` : `-${Math.abs(price)}₺`}
                            </Text>
                        </Right>
                  </ListItem>
              </View>
      );
  }

const HomeScreen = ({navigation}) => {
    
    const {transactions} = useSelector((state) => state.transactions);

    
    return(
        <Container>
        <Animated.View style = {{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 0,
            paddingHorizontal:10,
        }}>
            <Card navigation = {navigation}/>
        </Animated.View>

        <View style={{flex: 1, marginTop: -150}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => (item).id.toString()}
          />
        ) : (
          <Empty />
        )}
      </View>
        </Container>
    );
    
};

export default HomeScreen;