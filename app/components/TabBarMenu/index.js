import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

const TabBarMenu = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#114D44" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.tituloView}>
                    <Text style={styles.titulo}>WhatsApp</Text>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.addcontato()}>
                        <Image  source={require('../../assets/img/adicionar-contato.png')}/>
                    </TouchableOpacity> 
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Sair</Text>
                    </View>
                </View>
            </View>
            <TabBar {...props}  style={styles.tabBar}/>
        </View>
    )
}

export { TabBarMenu }