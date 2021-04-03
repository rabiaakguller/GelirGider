
import React, {useState} from 'react';

import { StyleSheet,Button} from 'react-native';
import {Container, Content, Form, Item, Input } from "native-base";

import { useDispatch} from 'react-redux';
import {addTransaction} from '../store/actions/transactionAction';

function AddTransaction ()  {
    const dispatch = useDispatch();

    const [title, setTitle] =  useState('');
    const [price, setPrice] =  useState('');

    const onSubmit = () => {
    if(!title || !price){
        return alert('Lütfen tüm bilgileri giriniz!');
    }
    const id = Math.floor(Math.random() * 600000);
    const newTransaction = {
    id,
    title,
    price: +price,
};
dispatch(addTransaction({...newTransaction}));
};

    return(

        <Container>
            <Content>
                <Form>
                    <Item style = {{...styles.item}}>
                        <Input 
                        placeholder = "Kategori Başlığı"
                        onChangeText={(title) => setTitle(title)}
                         />
                    </Item>
                    <Item style = {{...styles.item}}>
                        <Input 
                        placeholder = "Gider Tutarı" 
                        keyboardType="number-pad" 
                        onChangeText={(price) => setPrice(price)} 
                        onSubmitEditing={onSubmit}
                        />
                
                   </Item>
         
                </Form>
            </Content>
        </Container>

    ); 
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20,
    },
});

export default AddTransaction;