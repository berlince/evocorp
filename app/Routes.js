import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from './pages/FormLogin'
import FormCadastro from './pages/FormCadastro'
import BoasVindas from './pages/BoasVindas'
import Principal from './pages/Principal'
import AddContato from './pages/AddContato'

const Routes = () => {
    return(
        <Router navigationBarStyle={{ backgroundColor: '#115E54'}} titleStyle={{ color: '#fff' }} >
            <Stack key='root'>
                <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar={ true } /> 
                <Scene key="formCadastro" component={FormCadastro} title="Cadastro" hideNavBar={ false } /> 
                <Scene key="boasVindas" component={BoasVindas} title="BemVindo" hideNavBar={ true } />
                <Scene key="principal" component={Principal} title="Principal" hideNavBar={ true } initial />
                <Scene key="addcontato" component={AddContato} title="Adicionar Contato" hideNavBar={ false } />
            </Stack>
        </Router>
    )
}

export default Routes
