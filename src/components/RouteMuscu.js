import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BarreNavigation from './BarreNavigation'
import Accueil from '../pages/Accueil'
import About from '../pages/About'
import ListeAteliers from './ListeAteliers'
import Atelier from './Atelier'
import NoMatch from '../pages/NoMatch'
import ListeBoissons from './ListeBoissons'
import Boisson from './Boisson'

const RouteMuscu = () => {
    return (
        <BrowserRouter>
            <BarreNavigation />
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/ateliers">
                    <ListeAteliers />
                </Route>
                <Route exact path="/ateliers/:id">
                    <Atelier />
                </Route>
                <Route exact path="/boissons">
                    <ListeBoissons />
                </Route>
                <Route exact path="/boissons/:id">
                    <Boisson />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteMuscu