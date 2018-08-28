import React from 'react'
import { View } from 'react-native'
import { Input, Header, Botao } from '../components/'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions'

const FormLogin = (props) => {
    return(
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1 }}>
                <Header titulo="WhatsApp Clone" />
            </View>
            <View style={{ flex: 2 }}>
                <Input 
                    placeholder="Email"
                    value={props.email}
                    onChangeText={texto => props.modificaEmail(texto)}
                />
                <Input 
                    placeholder="Senha" 
                    value={props.senha}
                    onChangeText={texto => props.modificaSenha(texto)}
                    link="Ainda não tem cadastro? Cadastre-se"
                />
            </View>
            <View style={{ flex: 2 }}>
                <Botao title="Acessar" color="#115E54"/>
            </View>
        </View>
    )
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha})(FormLogin)
