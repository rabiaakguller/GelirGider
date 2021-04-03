import { Form } from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
/*import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostCard from '../components/PostCard';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Container} from '../styles/FeedStyles';*/
import FormButton from '../Forms/FormButton';

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hoşgeldiniz</Text>
        <FormButton buttonTitle='Çıkış Yap'
        onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    },
text: {
    fontSize: 20,
    color: '#333333',
}
});