import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './Category'

// The Quiz component takes two props: categoryID and categories. 
// The categoryID prop is the ID of the trivia category that the user picks. 
// The categories prop is an array of trivia categories.
// Quiz component first fetches a list of questions from the Open Trivia Database API. 
// The Axios library is used to make the HTTP request.
// The response data is then parsed 
// and stored in the questions state variable.
// The category = ${ categoryID } parameter specifies that the API should
// return questions from the category with the specified ID

function Quiz({ categoryID, categories }) {
    const catURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
    axios.get(catURL).then((response) => setQuestions(response.data.results))}, [categoryID])
    // uses the useEffect hook to fetch a list of questions from the Open Trivia Database API. 
    // The Axios library is used to make the HTTP request.
    // The response data is then parsed and stored in the questions state variable.
    // The useEffect hook is passed the categoryID
    // prop as its second argument, which means that the hook will only be 
    // executed when the categoryID prop changes.



    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleGoBack = () => {
        setQuestions(questions.length > 0)
    }

    console.log(questions)

    return (
    <>
    {questions.length > 0 ? (
    <section className='slide'>
        <div className='content'>
            <h1 className='title'>{questions[currentQuestion].question}</h1>
            <button className='button'>{questions[currentQuestion].correct_answer}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[0]}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[1]}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[2]}</button>
        </div>
        <div className='content'>
        <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next Question</button>
        <button onClick={handleGoBack}>Go Back</button>
        </div>
    </section>): (<Category categories={categories} />)}
    </>
    )
}

export default Quiz




// export default function Quiz({ selectedCategory }) {
//     const [topic, setTopic] = useState(null)
//     const answers = useRef(null)
//     let category = useRef(null)
//     let triviaQuestions = useRef(null)


//     useEffect(() => {
//         const URL = `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=easy`
//         axios.get(URL).then((response) => {

//             setTopic(response.data)
//             category.current = response.data.results[0].category
//             triviaQuestions.current = response.data.results[0].question
//             let correctAnswer = response.data.results[0].correct_answer
//             let wrongAnswers = response.data.results[0].incorrect_answers
//             answers.current = [...wrongAnswers, correctAnswer]
//             // console.log(answers)
//         })
//     }, [])

//     function handleAnswer(answer) {

//     }

//     if (topic) {
//         return (
//             <>
//                 <h1> TRIVIA TIME </h1>
//                 <h2> category: {category.current}  </h2>
//                 <h2> {triviaQuestions.current}  </h2>
//                 <ul>
//                     {answers && answers.current.map((answer, ind) =>
//                         <div key={ind} ><li onClick={() => handleAnswer(answer)}>{answer}</li></div>)}
//                 </ul>
//             </>
//         )
//     }
// }

