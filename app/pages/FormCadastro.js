import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import { Header, Input, Botao } from '../components/'
import { 
    modificaEmail,
    modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions'

class FormCadastro extends Component {

    _cadastraUsuario(){
        const { nome, email, senha } = this.props

        this.props.cadastraUsuario({ nome, email, senha })
    }

    render(){
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
                            value={this.props.nome}
                            onChangeText={texto => this.props.modificaNome(texto)}  
                        />
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
                            secureTextEntry
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                    </View>

                    <View style={{ flex: 2}}>
                        <Botao
                            title="Cadastrar"
                            color="#115E54"
                            onPress={() => this._cadastraUsuario()}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, 
    {modificaEmail, modificaSenha, modificaNome, cadastraUsuario})(FormCadastro)