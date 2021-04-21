
import React, {useContext, useState} from 'react';
import { View, Text, Button,TouchableOpacity,Image, StyleSheet} from 'react-native';
import FormInput from '../Forms/FormInput';
import FormButton from '../Forms/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext(AuthContext);

    return(
        <View style = {styles.container}>
        <Image
            source={require('../images/image4.png')}
            style={styles.logo}
        />
        <Text style={styles.text}>Gelir Gider</Text>

        <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />

        <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Şifre"
        iconType="lock"
        secureTextEntry={true}
        />

        <FormButton
        buttonTitle="Giriş Yap"
        onPress={() => login(email,password)}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Şifremi Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
            Hesabın yok mu? Kayıt ol!
        </Text>
        </TouchableOpacity>

        </View>
    );
};

export default LoginScreen;



const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50
    },
logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover'
    },
text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    },
navButton: {
    marginTop: 15,
    },
forgotButton: {
    marginVertical: 35,
    },
navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    },
});


