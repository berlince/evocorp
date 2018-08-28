import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class Header extends React.PureComponent {
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.titulo}>
                    {this.props.titulo}
                </Text>
            </View>
        )
    }
}

export { Header }