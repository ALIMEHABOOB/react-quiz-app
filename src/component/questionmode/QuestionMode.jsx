import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./QuestionMode.module.css"

const QuestionMode = () => {
  return (
    <div id={Styles.MainSec}>
    <Link to="/play">MCQ</Link><br />
    <Link to="/Fillin">FILL IN THE BLANKS</Link>
    <div>DESCRIPTIVE</div>
    <div>PROGRAMING</div>
</div>
  )
}

export default QuestionMode