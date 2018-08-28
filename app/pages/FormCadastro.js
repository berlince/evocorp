import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Header, Input, Botao } from '../components/'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions'

const FormCadastro = (props) => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/img/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Header titulo="Cadastro" />
                </View>

                <View style={{ flex: 2 }}>
                    <Input 
                        placeholder="Nome"
                        placeholderTextColor="#FFF" 
                        value={props.nome}
                        onChangeText={texto => props.modificaNome(texto)}  
                    />
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
                        secureTextEntry
                        onChangeText={texto => props.modificaSenha(texto)}
                    />
                </View>

                <View style={{ flex: 2}}>
                    <Botao
                        title="Cadastrar"
                        color="#115E54"
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome})(FormCadastro)