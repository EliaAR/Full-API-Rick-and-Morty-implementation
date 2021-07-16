import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/homePage.scss";
import citadel from "../images/citadel.png";
import meeUnf from "../images/meeUnf.png";
import seatUnf from "../images/seatUnf.png";

function HomePage() {
  return (
    <>
      <Header />
      <main className="mainPrincipal">
        <Link
          to="/characterPage"
          className="mainPrincipal__browsers mainPrincipal__browsersMeeseeks"
        >
          <img
            src={meeUnf}
            alt="Meeseeks"
            tittle="Meeseeks"
            className="mainPrincipal__meeseeks"
          />
          <p>Buscador por personajes</p>
        </Link>
        <Link
          to="/locationPage"
          className="mainPrincipal__browsers mainPrincipal__browsersCidatel"
        >
          <img
            src={citadel}
            alt="Ciudadela"
            tittle="Ciudadela"
            className="mainPrincipal__cidatel"
          />
          <p>Buscador por localizaciones</p>
        </Link>
        <Link
          to="/episodePage"
          className="mainPrincipal__browsers mainPrincipal__browsersEpisode"
        >
          <img
            src={seatUnf}
            alt="The old man and the seat"
            tittle="The old man and the seat"
            className="mainPrincipal__episode"
          />
          <p>Buscador por episodios</p>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
