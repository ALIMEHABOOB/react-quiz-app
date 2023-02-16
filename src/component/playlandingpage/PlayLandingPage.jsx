import React from "react";
import { Helmet } from "react-helmet";
import Styles from "./PlayLandingPage.module.css";
import { Link } from "react-router-dom";

const PlayLandingPage = () => {
  return (
    <section id={Styles.instruction1}>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <div className="instructions container">
        <h1>
          Play the Game if you are ready.🙌
        </h1>

        <span className={Styles.left}>
          <Link to="/">No take me back</Link>
        </span>
        <span className={Styles.right}>
          <Link to="/Question_mode">Okay, Let's do this!</Link>
        </span>
      </div>
    </section>
  );
};

export default PlayLandingPage;
