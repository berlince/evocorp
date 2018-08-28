import React from 'react'
import { Button, View } from 'react-native'

import styles from './styles'

class Botao extends React.PureComponent {
    render(){
        return(
            <Button 
                title={this.props.title}
                color={this.props.color} 
                onPress={() => false} 
            />
        )
    }
}

export { Botao }