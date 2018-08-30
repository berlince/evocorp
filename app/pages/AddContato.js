import React from 'react'
import { View } from 'react-native'
import { Input, Botao } from '../components'

const AddContato = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}> 
            
            <View style={{ flex: 1, justifyContent: 'center' }}> 
                <Input
                    placeholder="Email"
                    style={{ fontSize: 20, height: 45 }}
                    onChange={() => false}
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

export default AddContato