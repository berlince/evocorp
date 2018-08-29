import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Input, Header, Botao } from '../components/'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions'

const FormLogin = (props) => {
    return(
        <ImageBackground style={{ flex: 1 }} source={require('../assets/img/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Header titulo="WhatsApp Clone" />
                </View>
                <View style={{ flex: 3 }}>
                    <Input 
                        placeholder="Email"
                        placeholderTextColor="#FFF"
                        value={props.email}
                        onChangeText={texto => props.modificaEmail(texto)}
                    />
                    <Input 
                        placeholder="Senha"
                        placeholderTextColor="#FFF" 
                        value={props.senha}
                        onChangeText={texto => props.modificaSenha(texto)}
                        secureTextEntry
                        link="Ainda não tem cadastro? Cadastre-se"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Botao title="Acessar" color="#115E54"/>
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha})(FormLogin)
