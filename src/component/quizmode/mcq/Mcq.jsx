import React, { useState, useEffect } from "react";
import style from "./Mcq.module.css";
import { Link } from "react-router-dom";
import QuizSummary from "../quizsummary/QuizSummary";

const Mcq = () => {
  const [questions, setQuestions] = useState([]);
  let [checkBox, setCheckBox] = useState([]);
  const [page, setPage] = useState(1);

  let [correctAns, setCorrectAns] = useState();

  const [rightAnswer, setRightAnswers] = useState([]);
  const [wrongAnswer, setWrongAnswers] = useState([]);

  // ------------------------------------
  // to enable disable
  let [check1, setCheck1] = useState(false);
  let [check2, setCheck2] = useState(false);
  let [check3, setCheck3] = useState(false);
  let [check4, setCheck4] = useState(false);

  // -----------------------------------

  // console.log(correctAns);

  // -------------------------------------------
  // const [checked, setChecked] = useState({});

  // --------------------------------------------------

  // console.log(page);

  const fetchQuestions = async () => {
    const res = await fetch(` http://localhost:5000/questions`);
    const data = await res.json();

    console.log(data);

    window.sessionStorage.setItem("TotalQuestions",data.length)

    // data.map((val,id)=>{
    //   console.log(val.answer)
    // return answer.push({id:id,ans:val.answer}) })
    // console.log(answer)
    if (data && data.length > 0) {
      setQuestions(data);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // -----------------------------

  //next page

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= questions.length / 1 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  // -------------------------------------------------------------

  // console.log(questions);

  // ----------------------------------------

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.checked) {
      // if(e.target.value===answer)
      // {
      //   console.log(true);
      // }
      // setCheckBox([...checkBox, {id:questions[page - 1].id,ans:value}]);
      setCheckBox([...checkBox, value]);
      console.log(checkBox);
      console.log(questions);
      if (checkBox[checkBox.length - 1] === questions[page - 1].answer) {
        setCorrectAns([...correctAns, questions[page - 1].id]);
      }
      // console.log(correctAns);
    } else {
      if (checkBox.includes(e.target.value)) {
        checkBox.splice(checkBox.indexOf(e.target.value), 1);
        console.log(checkBox);
        // if (correctAns.includes(questions[page - 1].id)) {
        //   correctAns.splice(correctAns.indexOf(questions[page - 1].id), 1);
        // }
      }
    }
  };
  // -----------------------------------------------------

  // const handleSelection = async (selectedValue) => {
  //   const res = await fetch(` http://localhost:5000/questions`);
  //   const data = await res.json();
  //   console.log(data);
  //   const answer = data.find((item) => item.answer === selectedValue);
  // console.log(answer);
  //   if (answer) {
  //     setRightAnswer([...rightAnswer, selectedValue]);
  //   } else {
  //     setWrongAnswer([...wrongAnswer, selectedValue]);
  //   }
  // };

  // -----------------------------------------------

  // to store only right answer for that particular question
  const handleCheck = (event, id) => {
    // ----------------------------------------
    const isChecked = event.target.checked;
    const question = questions.find((q) => q.id === id);
    const answer = question.answer;

    isChecked
      ? setRightAnswers((prevState) => [...prevState, answer])
      : setWrongAnswers((prevState) => [...prevState, answer]);
  };

  console.log(rightAnswer);
  console.log(wrongAnswer);

  // ----------------------------------------------

  // to enable disable checkbox

  // var handleCheck1 = (event) => {
  //   setCheck1(event.target.checked);
  //   setCheck2(false);
  //   setCheck3(false);
  //   setCheck4(false);
  // };

  // var handleCheck2 = (event) => {
  //   setCheck2(event.target.checked);
  //   setCheck1(false);
  //   setCheck3(false);
  //   setCheck4(false);
  // };

  // var handleCheck3 = (event) => {
  //   setCheck3(event.target.checked);
  //   setCheck1(false);
  //   setCheck2(false);
  //   setCheck4(false);
  // };

  // var handleCheck4 = (event) => {
  //   setCheck4(event.target.checked);
  //   setCheck1(false);
  //   setCheck2(false);
  //   setCheck3(false);
  // };

  // -----------------------------------------------

  const handleCheck1 = (event) => {
    setCheck1(event.target.checked);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
  };

  const handleCheck2 = (event) => {
    setCheck2(event.target.checked);
    setCheck1(false);
    setCheck3(false);
    setCheck4(false);
  };

  const handleCheck3 = (event) => {
    setCheck3(event.target.checked);
    setCheck1(false);
    setCheck2(false);
    setCheck4(false);
  };

  const handleCheck4 = (event) => {
    setCheck4(event.target.checked);
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
  };
  // --------------------------------------------------
  const resetCheckbox = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
  };

  // -------------------------------------------------------

  // count ++
  useEffect(() => {
    function response(A1, A2) {
      let Ccount = 0;
      let Wcount = 0;
      for (let i = 0; i < A1.length; i++) {
        let found = false;
        for (let j = 0; j < A2.length; j++) {
          if (A1[i] === A2[j]) {
            Ccount++;
            found = true;
            break;
          }
        }
        if (!found) {
          Wcount++;
        }
      }
      console.log(Ccount);
      window.sessionStorage.setItem("Ccount",Ccount)

      console.log(Wcount);
      window.sessionStorage.setItem("Wcount",Wcount)

    }
    response(checkBox, rightAnswer);
  }, [rightAnswer]);
  // -------------------------------------------------------

  // ----------------------------------------------------------------

  return (
    <section id={style.mcqBlock}>
      <article>
        <div id={style.navBlock}> </div>
        <div>
          {questions.length > 0 && (
            <div className="products">
              {questions.slice(page * 1 - 1, page * 1).map((prod) => {
                return (
                  <span className="products__single" key={prod.id}>
                    <span id={style.arrowBlock}>
                      <span
                        onClick={() => selectPageHandler(page - 1)}
                        className={page > 0 ? "" : "pagination__disable"}
                        aria-hidden="true"
                        id={style.QRevBlock}
                      >
                        ◀
                      </span>
                      <span
                        onClick={() => selectPageHandler(page + 1)}
                        // className={
                        //   page < questions.length / 3 ? "" : "questionId_enable"
                        // }
                        aria-hidden="true"
                        id={style.forwardBlock}
                        // --------------------------------
                        className={
                          page === questions.length ? "pagination__disable" : ""
                        }
                      >
                        ▶
                      </span>
                    </span>
                    <span id={style.QuestionBlock}>
                      <span id={style.GreenQuestion}>Question : {prod.id}</span>
                      &nbsp; {prod.question}
                    </span>

                    <div className="option" id={style.OptionBlock}>
                      {/* --------------------------------------- */}
                      {/* radio check box  */}
                      {/* <label>
                        <input
                          type="radio"
                          name="radio"
                          onChange={handleChange}
                          value={prod.optionA}
                        />
                        <span>{prod.optionA}</span>
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="radio"
                          onChange={handleChange}
                          value={prod.optionB}
                        />
                        <span>{prod.optionB}</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          onChange={handleChange}
                          value={prod.optionC}
                        />
                        <span>{prod.optionC}</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          onChange={handleChange}
                          value={prod.optionD}
                        />
                        <span>{prod.optionD}</span>
                                
                      </label> */}

                      {/* ---------------------------- */}
                      {/* checkbox */}
                      <div>
                        <input
                          type="checkbox"
                          // checked={isChecked}
                          // onChange={handleChange}
                          // checked={isChecked}
                          // -------------------------------
                          name={prod.id}
                          // onChange={(event) => handleCheck(event, prod.id)}
                          // --------------------------------------
                          onChange={(event) => {
                            handleCheck(event, prod.id);
                            handleCheck1(event);
                          }}
                          checked={check1}
                          disabled={check2 || check3 || check4}
                          // -----------------------------------------
                          onClick={handleChange}
                          value={prod.optionA}
                        />
                        {prod.optionA}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          // checked={isChecked}
                          // onChange={handleChange}
                          // ----------------------------------
                          // checked={isChecked}
                          value={prod.optionB}
                          // onChange={handleChange}
                          onChange={(event) => {
                            handleCheck(event, prod.id);
                            handleCheck2(event);
                          }}
                          checked={check2}
                          disabled={check1 || check3 || check4}
                          // ------------------------------

                          // ----------------------------------
                          onClick={handleChange}
                          name={prod.id}
                        />
                        {prod.optionB}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          // checked={isChecked}
                          // onChange={handleChange}
                          // ------------------------------
                          // checked={isChecked}
                          name={prod.id}
                          value={prod.optionC}
                          //onChange={(event) => handleCheck(event, prod.id)}
                          // -------------------------------
                          onChange={(event) => {
                            handleCheck(event, prod.id);
                            handleCheck3(event);
                          }}
                          checked={check3}
                          disabled={check2 || check1 || check4}
                          // -----------------------
                          onClick={handleChange}
                        />
                        {prod.optionC}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          // checked={isChecked}
                          // onChange={handleChange}
                          // -----------------------------------------
                          // checked={isChecked}
                          name={prod.id}
                          value={prod.optionD}
                          // onChange={(event) => handleCheck(event, prod.id)}
                          // ------------------------
                          onChange={(event) => {
                            handleCheck(event, prod.id);
                            handleCheck4(event);
                          }}
                          checked={check4}
                          disabled={check2 || check1 || check3}
                          // ----------------------------
                          onClick={handleChange}
                        />
                        {prod.optionD}
                      </div>

                      {/* {isChecked ? 'Checked' : 'Unchecked'} */}
                    </div>
                    {/* {setCorrectAns(prod.answer)} */}
                  </span>
                );
              })}
            </div>
          )}

          {questions.length > 0 && (
            <div className="pagination">
              {/* ------------------------------------------------- */}
              <nav aria-label="Page navigation example" id={style.pageNav}>
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span
                        onClick={() => selectPageHandler(page - 1)}
                        className={page > 0 ? "" : "pagination__disable"}
                        aria-hidden="true"
                        id={style.arrowBtn}
                      >
                        ◀
                      </span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      {/* {carousel examples} */}
                      <div
                        id="carouselExampleSlidesOnly"
                        class="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item active" id={style.btnBlock}>
                            {/* ------------------------------ */}
                            {/* ------------------- */}
                            <button
                              type="button"
                              class="btn-close-white"
                              aria-label="Close"
                            >
                              {page}
                            </button>
                            {/* ------------------------------- */}
                            &nbsp;
                            <button
                              className={
                                page + 1 > questions.length
                                  ? "carousel-item disable"
                                  : ""
                              }
                              onClick={() => selectPageHandler(page + 1)}
                            >
                              {page + 1}
                            </button>
                            {/* ---------------------------------- */}
                            &nbsp;
                            <button
                              className={
                                page + 2 > questions.length
                                  ? "carousel-item disable"
                                  : ""
                              }
                              onClick={() => selectPageHandler(page + 2)}
                            >
                              {page + 2}
                            </button>
                            {/* -------------------- */}
                            &nbsp;
                            <button
                              className={
                                page + 3 > questions.length
                                  ? "carousel-item disable"
                                  : ""
                              }
                              onClick={() => selectPageHandler(page + 3)}
                            >
                              {page + 3}
                            </button>
                            {/* ------------------------------------- */}
                            &nbsp;
                            <button
                              className={
                                page + 4 > questions.length
                                  ? "carousel-item disable"
                                  : ""
                              }
                              onClick={() => selectPageHandler(page + 4)}
                            >
                              {page + 4}
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* ==================carousel ended */}
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span
                        onClick={() => {
                          selectPageHandler(page + 1);
                          resetCheckbox();
                        }}
                        // className={
                        //   page < questions.length / 3 ? "" : "questionId_enable"
                        // }
                        aria-hidden="true"
                        // --------------------------------
                        className={
                          page === questions.length ? "pagination__disable" : ""
                        }
                        id={style.ForwardBtn}
                        // onChange={handleCheck}
                      >
                        ▶
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* {=====================} */}
            </div>
          )}
          <div id={style.btnSet}>
            <button
              id={style.greyBtn}
              onClick={() => selectPageHandler(page + 1)}
            >
              Next
            </button>
            <Link to="/play/quizsummary">
              <button id={style.greenBtn}>Submit</button>
            </Link>
          </div>
        </div>
      </article>
      {/* <QuizSummary correct={rightAnswer} wrong={wrongAnswer} /> */}
    </section>
  );
};

export default Mcq;
