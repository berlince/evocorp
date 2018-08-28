import React from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

class Input extends React.PureComponent {
    render(){
        return(
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor={this.props.placeholderTextColor}
                />
                <TouchableOpacity onPress={() => Actions.formCadastro()}>
                    <Text style={styles.link}>{this.props.link}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export { Input }