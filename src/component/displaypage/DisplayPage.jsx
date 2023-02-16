import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Styles from "./DisplayPage.module.css"

const DisplayPage = () => {
  return (
    <div id={Styles.mainPage}>
    <Helmet><title >Quiz App</title></Helmet>
    <div id={Styles.Home}>
        <section> 
            <h1 id={Styles.Title}>Quiz</h1>
            <div className="play-button-container">
               
                   <Link id={Styles.play_button} to="/playlandingpage">Play</Link>
              
            </div>
            <div className="auth-container">
                <Link to="/login"  id={Styles.login_button}>Login</Link>
                <Link to="/signup"  id={Styles.Signup_button}>Sign up</Link>
            </div>
        </section>
    </div>
</div>
  )
}

export default DisplayPage