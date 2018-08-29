import React from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native'

const BoasVindas = () => {
    return(
        <ImageBackground style={{ flex: 1 }} source={require('../assets/img/bg.png')}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#FFF" }}>Seja Bem-Vindo!</Text>
                    <Image source={require('../assets/img/logo.png')} />
                </View>

                <View>
                    <Button title="Fazer Login" onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default BoasVindas