import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/products'

const Routes = () => (
    <BrowserRouter>  
        {/* o switch faz com que apenas uma rota seja chamada ao mesmo tempo */}
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />

        </Switch>
    </BrowserRouter>
)

export default Routes