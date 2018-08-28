import React from 'react'
import { View } from 'react-native'
import { Header, Input, Botao } from '../components/'
import { connect } from 'react-redux'

const FormCadastro = (props) => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1 }}>
                <Header titulo="Cadastro" />
            </View>

            <View style={{ flex: 2 }}>
                <Input placeholder="Nome" value={props.nome} />
                <Input placeholder="Email" value={props.email} />
                <Input placeholder="Senha" value={props.senha} />
            </View>

            <View style={{ flex: 2}}>
                <Botao
                    title="Cadastrar"
                    color="#115E54"
                />
            </View>
        </View>
    )
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, null)(FormCadastro)