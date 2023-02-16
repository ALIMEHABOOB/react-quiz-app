import React ,{useState,useEffect}from 'react'
// import style1 from "./QuizSummary.module.css"

const QuizSummary = ( ) => {
 
let Rscore = window.sessionStorage.getItem("Ccount")
console.log(Rscore)

let Wscore = window.sessionStorage.getItem("Wcount")
console.log(Wscore)

let TQ = window.sessionStorage.getItem("TotalQuestions")
console.log(TQ)

let TS = (Rscore/TQ)* 100


  return (
    <div>
      <h2>Summary</h2>
      <p>Total Questions: {TQ}</p>
      <p>Total Right Answers: {Rscore}</p>
      <p>Total Wrong Answers: {Wscore}</p>
      <p>Total Score: {TS}%</p>
    </div>
  );
}

export default QuizSummary