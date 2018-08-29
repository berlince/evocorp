import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from './pages/FormLogin'
import FormCadastro from './pages/FormCadastro'
import BoasVindas from './pages/BoasVindas'

const Routes = () => {
    return(
        <Router>
            <Stack key='root'>
                <Scene key="formLogin" component={FormLogin} title="Login" />
                <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
                <Scene key="boasVinsas" component={BoasVindas} title="BemVindo" initial />
            </Stack>
        </Router>
    )
}

export default Routes
