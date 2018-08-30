import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

import { TabBarMenu } from '../components'
import Conversas from './Conversas'
import Contatos from './Contatos'

class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'conversas', title: 'Conversas' },
      { key: 'contatos', title: 'Contatos' },
    ]
  }

  _renderTabBar = props => <TabBarMenu { ... props } />

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={this._renderTabBar}
        renderScene={SceneMap({
          conversas: Conversas,
          contatos: Contatos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

export default Principal