import React from 'react'
import { View } from 'react-native'
import { Input, Botao } from '../components'
import { connect } from 'react-redux'

const AddContato = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}> 
            
            <View style={{ flex: 1, justifyContent: 'center' }}> 
                <Input
                    placeholder="Email"
                    style={{ fontSize: 20, height: 45 }}
                    onChange={() => false}
                    value={props.adiciona_contato_email}
                />
            </View>

            <View style={{ flex: 1 }}> 
                <Botao
                    title="Adicionar"
                    color="#115E54"
                    onPress={() => false }
                />
            </View>
        </View>
    )
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email
    }
)

export default connect(mapStateToProps, null)(AddContato)