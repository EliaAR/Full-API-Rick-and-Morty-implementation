import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../HomePage/Homepage";
import { CharacterPage } from "../Characters/CharacterPage";
import { LocationPage } from "../Locations/LocationPage";
import { EpisodePage } from "../Episodes/EpisodePage";
import { CharacterDetail } from "../Characters/CharacterDetail";
import { ErrorRouteMsg } from "../ErrorRouteMsg/ErrorRouteMsg";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/characterPage" exact component={CharacterPage}></Route>
        <Route path="/locationPage" exact component={LocationPage}></Route>
        <Route path="/episodePage" exact component={EpisodePage}></Route>
        <Route path="/characterdetails/:id" component={CharacterDetail} />
        <Route path="" component={ErrorRouteMsg} />
      </Switch>
    </Router>
  );
}
export { App };