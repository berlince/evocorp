import React, { Component } from 'react'
import { View, ImageBackground, Text, ActivityIndicator } from 'react-native'
import { Input, Header, Botao } from '../components/'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions'

class FormLogin extends Component {

    _autenticarUsuario(){
        const { email, senha } = this.props
        this.props.autenticarUsuario({ email, senha })
    }

    renderBtnAcessar(){
        if(this.props.loading_login){
            return (
                <ActivityIndicator  size="large" />
            )
        }else{
            return (
                <Botao 
                    title="Acessar" 
                    color="#115E54"
                    onPress={() => this._autenticarUsuario()} 
                />
            )
        }
    }

    render(){
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
                            value={this.props.email}
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <Input 
                            placeholder="Senha"
                            placeholderTextColor="#FFF" 
                            value={this.props.senha}
                            onChangeText={texto => this.props.modificaSenha(texto)}
                            secureTextEntry
                            link="Ainda não tem cadastro? Cadastre-se"
                        />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha, 
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, 
    {modificaEmail, modificaSenha, autenticarUsuario})(FormLogin)
