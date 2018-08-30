import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { TabBar } from 'react-native-tab-view'

const TabBarMenu = (props) => {
    return (
        <View style={{ backgroundColor: "#115E54", elevation: 4 }}>
            <StatusBar backgroundColor="#114D44" />
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, marginLeft: 20 }}>WhatsApp</Text>
                </View>
            <TabBar {...props}  style={{ backgroundColor: '#115E54', elevation: 0 }}/>
        </View>
    )
}

export { TabBarMenu }