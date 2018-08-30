import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

const TabBarMenu = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#114D44" />
                <View style={styles.conteudo}>
                    <View style={styles.tituloView}>
                        <Text style={styles.titulo}>WhatsApp</Text>
                    </View>
                    <View style={styles.opcoesView}>
                        <View style={styles.addContato}>
                            <TouchableOpacity onPress={() => Actions.addcontato()}>
                                <Image  source={require('../../assets/img/adicionar-contato.png')}/>
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.sairView}>
                            <Text style={styles.sairText}>Sair</Text>
                        </View>
                    </View>
                </View>
            <TabBar {...props}  style={styles.tabBar}/>
        </View>
    )
}

export { TabBarMenu }